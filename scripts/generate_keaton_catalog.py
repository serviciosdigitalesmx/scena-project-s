from __future__ import annotations

import csv
import json
import re
import shutil
from collections import defaultdict
from pathlib import Path


ROOT = Path("/Users/usuario/Documents/New project 39")
SOURCE = Path("/Users/usuario/Desktop/keaton_catalogo_playwright")
CSV_PATH = SOURCE / "catalogo_keaton.csv"
PUBLIC_DIR = ROOT / "public/keaton"
OUTPUT_PATH = ROOT / "src/lib/keaton-generated.ts"


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def get_family(code: str, name: str, desc: str) -> tuple[str, str]:
    upper = f"{code} {name} {desc}".upper()
    if code in {"K5", "K302", "K6", "K17", "K5000"} or "MANGUERA SAE" in upper:
        return "mangueras-hidraulicas", "Mangueras hidráulicas"
    if code.startswith("QM") or "CONEXIÓN" in upper or "CONEXION" in upper:
        return "conexiones-hidraulicas", "Conexiones hidráulicas"
    if code.startswith("KL-") and any(x in upper for x in ["LATÓN", "LATON", "ADAPT", "ABOCINADO"]):
        return "adaptadores-laton", "Adaptadores de latón"
    if code.startswith("MI"):
        return "mangueras-industriales", "Mangueras industriales"
    if code.startswith("SHU-") or code.startswith("SR-"):
        return "silicon-codos", "Silicón y codos"
    if code in {"AIRBRAKE", "ABASSY", "DL-COILHOSE", "SL-COILHOSE", "MPFAAZ", "MPFARO", "MPFANE", "BARRIER"}:
        return "frenos-aire", "Frenos de aire"
    if code in {"EL4", "EL9", "GASOIL", "HEAT", "ORFX", "PLIOVIC", "SRAD", "TUR", "CAC", "PUC", "ABG", "KEN-MP"} or "QUIM" in upper:
        return "especiales", "Especiales / químicos"
    return "otros", "Otros Keaton"


def infer_text(row: dict[str, str]) -> dict[str, str]:
    desc_short = (row.get("descripcion_corta") or "").strip()
    desc = (row.get("descripcion") or "").strip()
    specs_path = Path(row.get("specs_txt") or "")
    specs_text = specs_path.read_text(encoding="utf-8", errors="ignore") if specs_path.exists() else ""
    lines = [l.strip() for l in desc_short.splitlines() if l.strip()]
    name = row["nombre"].strip()
    if lines:
        short = lines[0]
        desc_text = " ".join(lines[1:]) if len(lines) > 1 else short
    else:
        short = name
        desc_text = desc[:280]
    spec_lines = []
    for line in specs_text.splitlines():
        line = line.strip()
        if not line or line.upper().startswith(("NOMBRE:", "SKU:", "URL:", "PRECIO:", "CATEG", "IMAGEN:", "---")):
            continue
        if len(line) > 180:
            continue
        spec_lines.append(line)
    spec_lines = list(dict.fromkeys(spec_lines))
    if not spec_lines:
        spec_lines = ["Validación técnica según aplicación", "Consulta compatibilidad con ingeniería"]
    pressure = next((line for line in spec_lines if "PSI" in line.upper() or "KG/CM" in line.upper()), short)
    temperature = next((line for line in spec_lines if "°C" in line or "C" in line), "Según serie y aplicación")
    return {
        "description": desc_text[:260].replace("\n", " "),
        "materials": "Ver ficha técnica de fabricante",
        "pressure": pressure,
        "temperature": temperature,
        "applications": [name, "Industria", "Mantenimiento", "Aplicación técnica"],
        "specifications": spec_lines[:5],
    }


def main() -> None:
    rows = list(csv.DictReader(CSV_PATH.open(newline="", encoding="utf-8-sig")))
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    families: dict[str, dict[str, object]] = {}
    for row in rows:
        code = row["nombre"].strip()
        family_slug, family_label = get_family(code, code, row.get("descripcion_corta", ""))
        data = infer_text(row)
        product_dir = Path(row["carpeta"])
        src_img = product_dir / "foto.svg"
        dst_img = PUBLIC_DIR / f"{row['index'].zfill(3)}-{slugify(code)}.svg"
        if src_img.exists():
            shutil.copy2(src_img, dst_img)
        product = {
            "code": code,
            "name": code,
            "description": data["description"],
            "image": f"/keaton/{dst_img.name}",
            "imageAlt": f"{code} de Keaton",
            "width": 900,
            "height": 320,
            "materials": data["materials"],
            "pressure": data["pressure"],
            "temperature": data["temperature"],
            "applications": data["applications"],
            "specifications": data["specifications"],
        }
        if family_slug not in families:
            families[family_slug] = {"id": family_slug, "label": family_label, "summary": family_label, "image": product["image"], "imageAlt": product["imageAlt"], "width": 900, "height": 320, "products": []}
        families[family_slug]["products"].append(product)

    ordered = list(families.values())
    ordered.sort(key=lambda f: f["label"])  # type: ignore[index]
    OUTPUT_PATH.write_text(
        "export type CatalogProduct = {\n"
        "  code: string\n  name: string\n  description: string\n  image: string\n  imageAlt: string\n  width: number\n  height: number\n  materials: string\n  pressure: string\n  temperature: string\n  applications: string[]\n  specifications: string[]\n}\n\n"
        "export type CatalogCategory = {\n"
        "  id: string\n  label: string\n  summary: string\n  image: string\n  imageAlt: string\n  width: number\n  height: number\n  products: CatalogProduct[]\n}\n\n"
        f"export const CATALOG_CATEGORIES: CatalogCategory[] = {json.dumps(ordered, ensure_ascii=False, indent=2)} as const\n\n"
        "export const CATALOG_PRODUCTS = CATALOG_CATEGORIES.flatMap((category) => category.products)\n",
        encoding="utf-8",
    )
    print(f"generated {OUTPUT_PATH}")
    print(f"families={len(ordered)} products={len(rows)}")


if __name__ == "__main__":
    main()
