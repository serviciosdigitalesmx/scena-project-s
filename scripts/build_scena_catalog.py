from __future__ import annotations

from pathlib import Path
from textwrap import wrap

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFont
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path("/Users/usuario/Documents/New project 39")
SOURCE_DIR = ROOT / "output/pdf"
OUTPUT_DIR = ROOT / "output/pdf"
TMP_DIR = ROOT / "tmp/pdfs/scena-catalog"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
TMP_DIR.mkdir(parents=True, exist_ok=True)

NAVY = (6, 27, 79)
ROYAL = (20, 87, 230)
RED = (227, 38, 54)
WHITE = (255, 255, 255)
INK = (18, 29, 54)
MUTED = (91, 105, 130)
PALE = (241, 245, 252)
LINE = (210, 220, 238)

CONTACT_PHONE_1 = "+52 1 81 3715 7752"
CONTACT_PHONE_2 = "+52 1 81 3715 7752"
CONTACT_EMAIL = "ventas@scena.com.mx"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = (
        [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/Supplemental/DIN Alternate Bold.ttf",
        ]
        if bold
        else [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/System/Library/Fonts/Avenir Next.ttc",
        ]
    )
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size=size)
    return ImageFont.load_default()


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, scale: float = 1.0, light: bool = False) -> None:
    block = int(92 * scale)
    label_x = x + block + int(28 * scale)
    draw.rectangle((x, y, x + block, y + block), fill=ROYAL)
    draw.rectangle((x, y + block - int(10 * scale), x + block, y + block), fill=RED)
    draw.text((x + block / 2, y + block / 2), "SC", font=font(int(36 * scale), True), fill=WHITE, anchor="mm")
    color = WHITE if light else NAVY
    draw.text((label_x, y + int(8 * scale)), "SCENA", font=font(int(48 * scale), True), fill=color)
    draw.rectangle((label_x, y + int(68 * scale), label_x + int(44 * scale), y + int(73 * scale)), fill=RED)
    draw.text(
        (label_x + int(56 * scale), y + int(61 * scale)),
        "INGENIERÍA INDUSTRIAL 24/7",
        font=font(int(13 * scale), True),
        fill=WHITE if light else ROYAL,
    )


def draw_wrapped(
    draw: ImageDraw.ImageDraw,
    text: str,
    xy: tuple[int, int],
    max_width: int,
    text_font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int] = INK,
    spacing: int = 8,
) -> int:
    x, y = xy
    words = text.split()
    lines: list[str] = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=text_font)[2] <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    line_height = draw.textbbox((0, 0), "Ag", font=text_font)[3]
    for item in lines:
        draw.text((x, y), item, font=text_font, fill=fill)
        y += line_height + spacing
    return y


def cover_fit(source: Image.Image, size: tuple[int, int], focus: tuple[float, float] = (0.5, 0.5)) -> Image.Image:
    target_w, target_h = size
    ratio = max(target_w / source.width, target_h / source.height)
    resized = source.resize((int(source.width * ratio), int(source.height * ratio)), Image.Resampling.LANCZOS)
    left = max(0, min(resized.width - target_w, int(resized.width * focus[0] - target_w / 2)))
    top = max(0, min(resized.height - target_h, int(resized.height * focus[1] - target_h / 2)))
    return resized.crop((left, top, left + target_w, top + target_h))


def section_label(draw: ImageDraw.ImageDraw, x: int, y: int, label: str, width: int) -> None:
    draw.rounded_rectangle((x, y, x + width, y + 58), radius=12, fill=RED)
    draw.text((x + 24, y + 29), label, font=font(24, True), fill=WHITE, anchor="lm")


def footer(draw: ImageDraw.ImageDraw, page: int, width: int, height: int) -> None:
    draw.rectangle((0, height - 56, width, height), fill=NAVY)
    draw.rectangle((0, height - 8, width, height), fill=RED)
    draw.text((44, height - 35), "SCENA  |  SUMINISTRO Y VALIDACIÓN INDUSTRIAL", font=font(16, True), fill=WHITE, anchor="lm")
    draw.text((width - 44, height - 35), f"{page:02d}", font=font(18, True), fill=WHITE, anchor="rm")


def create_cover() -> Image.Image:
    width, height = 1000, 1294
    page = Image.new("RGB", (width, height), NAVY)
    draw = ImageDraw.Draw(page)
    product = Image.open(ROOT / "public/catalog/manguera-hidraulica.webp").convert("RGB")
    product = ImageEnhance.Contrast(product).enhance(1.08)
    visual = cover_fit(product, (width, 560), focus=(0.55, 0.55))
    overlay = Image.new("RGBA", visual.size, (6, 27, 79, 0))
    ImageDraw.Draw(overlay).rectangle((0, 0, visual.width, visual.height), fill=(6, 27, 79, 50))
    visual = Image.alpha_composite(visual.convert("RGBA"), overlay).convert("RGB")
    page.paste(visual, (0, height - 560))
    draw.rectangle((0, height - 575, width, height - 555), fill=RED)
    draw_logo(draw, 70, 64, scale=1.12, light=True)
    draw.text((70, 310), "CATÁLOGO", font=font(92, True), fill=WHITE)
    draw.text((70, 402), "INDUSTRIAL", font=font(92, True), fill=ROYAL)
    draw.rectangle((70, 530, 170, 540), fill=RED)
    draw_wrapped(
        draw,
        "Mangueras, conexiones, adaptadores y soluciones para conducción de fluidos.",
        (70, 575),
        760,
        font(29),
        WHITE,
        spacing=12,
    )
    draw.rounded_rectangle((70, 672, 508, 724), radius=10, fill=WHITE)
    draw.text((94, 698), "SELECCIÓN POR ESPECIFICACIÓN", font=font(18, True), fill=NAVY, anchor="lm")
    draw.text((70, 1198), "SCENA  |  EDICIÓN 2026", font=font(17, True), fill=WHITE)
    draw.text((930, 1198), "01", font=font(18, True), fill=WHITE, anchor="ra")
    return page


def create_about() -> Image.Image:
    width, height = 2000, 1294
    page = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(page)
    draw.rectangle((0, 0, width, 118), fill=NAVY)
    draw_logo(draw, 64, 18, scale=0.82, light=True)
    draw.text((1934, 60), "CATÁLOGO TÉCNICO", font=font(22, True), fill=WHITE, anchor="rm")

    draw.text((70, 180), "INGENIERÍA ANTES QUE CATÁLOGO", font=font(46, True), fill=NAVY)
    draw_wrapped(
        draw,
        "En SCENA no entregamos una lista infinita de opciones. Validamos presión, temperatura, fluido y conexión para recomendar la solución correcta.",
        (70, 250),
        870,
        font(25),
        MUTED,
        spacing=10,
    )
    section_label(draw, 70, 410, "NUESTRA FORMA DE TRABAJAR", 470)
    steps = [
        ("01", "Especificación", "Recibimos datos reales de operación y montaje."),
        ("02", "Validación", "Revisamos compatibilidad, norma y seguridad."),
        ("03", "Selección", "Proponemos la pieza adecuada para la aplicación."),
        ("04", "Entrega", "Cotización, ensamble y suministro con seguimiento."),
    ]
    y = 500
    for number, title, body in steps:
        draw.rounded_rectangle((70, y, 940, y + 116), radius=16, fill=PALE, outline=LINE, width=2)
        draw.ellipse((92, y + 26, 154, y + 88), fill=ROYAL)
        draw.text((123, y + 57), number, font=font(19, True), fill=WHITE, anchor="mm")
        draw.text((180, y + 24), title, font=font(24, True), fill=NAVY)
        draw.text((180, y + 62), body, font=font(19), fill=MUTED)
        y += 132

    draw.rectangle((1000, 118, width, height - 56), fill=PALE)
    draw.text((1070, 180), "PORTAFOLIO", font=font(46, True), fill=NAVY)
    categories = [
        "Mangueras hidráulicas",
        "Mangueras de aire y agua",
        "Succión, teflón y combustible",
        "Conexiones hidráulicas y de latón",
        "Conexiones neumáticas y push-in",
        "Coples, adaptadores y químicos",
    ]
    for index, item in enumerate(categories):
        y = 260 + index * 74
        draw.rectangle((1070, y + 7, 1082, y + 39), fill=RED)
        draw.text((1110, y), item, font=font(24, True), fill=INK)
    image = Image.open(ROOT / "public/catalog/adaptadores-hidraulicos.webp").convert("RGB")
    image.thumbnail((760, 480), Image.Resampling.LANCZOS)
    page.paste(image, (1120, 690))
    draw.rounded_rectangle((1070, 1080, 1900, 1168), radius=16, fill=NAVY)
    draw.text((1110, 1105), "Cotización directa", font=font(20, True), fill=RED)
    draw.text((1110, 1137), CONTACT_PHONE_1, font=font(25, True), fill=WHITE)
    footer(draw, 2, width, height)
    return page


def recolor_catalog_page(source_path: Path) -> Image.Image:
    image = Image.open(source_path).convert("RGB")
    data = np.array(image)
    r = data[:, :, 0].astype(np.int16)
    g = data[:, :, 1].astype(np.int16)
    b = data[:, :, 2].astype(np.int16)
    green = (np.abs(r - 47) < 20) & (np.abs(g - 163) < 30) & (np.abs(b - 79) < 25)
    blue = (np.abs(r - 47) < 25) & (np.abs(g - 51) < 25) & (np.abs(b - 125) < 35)
    data[green] = RED
    data[blue] = ROYAL
    return Image.fromarray(data.astype(np.uint8), "RGB")


def product_page(source_path: Path, page_number: int) -> Image.Image:
    page = recolor_catalog_page(source_path)
    if page_number == 3:
        original = Image.open(source_path).convert("RGB")
        # Preserve the two green suction hoses as photographed in the source.
        page.paste(original.crop((35, 1218, 650, 1430)), (35, 1218))
    draw = ImageDraw.Draw(page)
    width, height = page.size
    draw.rectangle((0, 0, width, 70), fill=NAVY)
    draw.rectangle((0, 70, width, 78), fill=RED)
    draw.text((42, 35), "SCENA", font=font(24, True), fill=WHITE, anchor="lm")
    draw.text((width - 42, 35), "CATÁLOGO DE SOLUCIONES INDUSTRIALES", font=font(18, True), fill=WHITE, anchor="rm")
    footer(draw, page_number, width, height)
    return page


def create_adapters_contact(source_path: Path) -> Image.Image:
    page = recolor_catalog_page(source_path)
    draw = ImageDraw.Draw(page)
    width, height = page.size
    draw.rectangle((0, 0, width, 70), fill=NAVY)
    draw.rectangle((0, 70, width, 78), fill=RED)
    draw.text((42, 35), "SCENA", font=font(24, True), fill=WHITE, anchor="lm")
    draw.text((width - 42, 35), "ADAPTADORES Y ESPECIALES", font=font(18, True), fill=WHITE, anchor="rm")

    # The original right-hand distributor page is removed entirely.
    draw.rectangle((1000, 78, width, height - 56), fill=NAVY)
    draw_logo(draw, 1080, 145, scale=1.0, light=True)
    draw.text((1080, 315), "VALIDAMOS TU", font=font(54, True), fill=WHITE)
    draw.text((1080, 374), "APLICACIÓN", font=font(54, True), fill=RED)
    draw_wrapped(
        draw,
        "Envíanos presión, temperatura, fluido y tipo de conexión. Nuestro equipo revisa la compatibilidad antes de cotizar.",
        (1080, 465),
        760,
        font(25),
        WHITE,
        spacing=11,
    )
    info = [
        ("WHATSAPP", CONTACT_PHONE_1),
        ("TELÉFONO", CONTACT_PHONE_2),
        ("CORREO", CONTACT_EMAIL),
        ("COBERTURA", "Envíos nacionales"),
    ]
    y = 680
    for label, value in info:
        draw.rectangle((1080, y, 1860, y + 90), fill=(12, 43, 105), outline=(54, 91, 160), width=2)
        draw.text((1110, y + 18), label, font=font(15, True), fill=RED)
        draw.text((1110, y + 53), value, font=font(23, True), fill=WHITE)
        y += 108
    footer(draw, 6, width, height)
    return page


def create_keaton_comparison() -> Image.Image:
    width, height = 1000, 1294
    page = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(page)
    draw.rectangle((0, 0, width, 118), fill=NAVY)
    draw_logo(draw, 64, 18, scale=0.82, light=True)
    draw.text((1934, 60), "ANEXO DE COBERTURA", font=font(22, True), fill=WHITE, anchor="rm")

    draw.text((70, 176), "COMPARATIVA KEATON", font=font(46, True), fill=NAVY)
    draw_wrapped(
        draw,
        "Estos artículos y familias están presentes en Keaton y no estaban listados de forma explícita en el catálogo SCENA anterior. Los integramos como anexo técnico para cerrar huecos de cobertura.",
        (70, 246),
        860,
        font(22),
        MUTED,
        spacing=9,
    )

    families = [
        ("Mangueras hidráulicas", ["K5", "K302", "K6", "K17", "K5000"]),
        ("Conexiones hidráulicas", ["QM2030", "QM2040", "QM2090", "QM2120", "QM2240", "QM2250", "QM7800", "QM2810", "QM2820", "QM2840", "QM2800", "QM7030", "QM7040", "QM2200"]),
        ("Adaptadores de latón", ["KL-41F", "KL-AFA-602", "KL-100B", "KL-101B", "KL-102B", "KL-103B", "KL-104B", "KL-108B"]),
        ("Manguera industrial", ["MIRO", "MIAM", "MIAZ", "MINE", "MIPVC"]),
        ("Silicón y codos", ["SHU-BK", "SHU-BL", "SHU-OR", "SR-BK", "SR-BL", "SR-OR"]),
        ("Frenos de aire", ["AIRBRAKE", "ABASSY", "DL-COILHOSE", "SL-COILHOSE", "MPFAAZ", "MPFARO", "MPFANE"]),
        ("Especiales / químicos", ["BARRIER", "EL4", "EL9", "GASOIL", "HEAT", "ORFX", "PLIOVIC", "SRAD", "TUR", "CAC"]),
    ]

    left = 70
    top = 360
    col_w = 410
    row_h = 114
    for idx, (family, items) in enumerate(families):
        col = idx % 2
        row = idx // 2
        x = left + col * 450
        y = top + row * 148
        draw.rounded_rectangle((x, y, x + col_w, y + row_h), radius=16, fill=PALE, outline=LINE, width=2)
        draw.rounded_rectangle((x, y, x + 190, y + 34), radius=10, fill=RED)
        draw.text((x + 18, y + 17), family.upper(), font=font(16, True), fill=WHITE, anchor="lm")
        item_text = " • ".join(items[:6]) if len(items) <= 6 else " • ".join(items[:5]) + " ..."
        draw_wrapped(draw, item_text, (x + 18, y + 50), 370, font(18), INK, spacing=5)

    draw.rounded_rectangle((70, 1110, 930, 1218), radius=16, fill=NAVY)
    draw.text((102, 1160), "Resultado", font=font(18, True), fill=RED)
    draw_wrapped(
        draw,
        "SCENA ya cubre la intención comercial; este anexo agrega los códigos Keaton para que nada quede implícito.",
        (102, 1186),
        760,
        font(16, True),
        WHITE,
        spacing=4,
    )
    footer(draw, 7, width, height)
    return page


def create_qualityrubber_comparison() -> Image.Image:
    width, height = 1000, 1294
    page = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(page)
    draw.rectangle((0, 0, width, 118), fill=NAVY)
    draw_logo(draw, 64, 18, scale=0.82, light=True)
    draw.text((1934, 60), "ANEXO DE COBERTURA", font=font(22, True), fill=WHITE, anchor="rm")

    draw.text((70, 176), "COMPARATIVA QUALITY RUBBER", font=font(44, True), fill=NAVY)
    draw_wrapped(
        draw,
        "Quality Rubber amplía el espectro de SCENA en mangueras industriales de descarga, succión, abrasión, combustibles, vapor, químicos y alimentos. Esta hoja resume los grupos que conviene cubrir con mayor visibilidad.",
        (70, 246),
        860,
        font(21),
        MUTED,
        spacing=9,
    )

    families = [
        ("Agua y descarga", ["QR DESCARGA", "QR DESCARGA LIGERA", "QR SUCCIÓN", "QR SUCCIÓN REFORZADA"]),
        ("Automotriz / aire", ["QR RADIADOR", "QR F-CARBONO", "QR F-VIDRIO", "QR VENTILACIÓN", "QR NEUMATIC", "QR AIRE CALIENTE"]),
        ("Manejo de materiales", ["QR TOLVA", "QR ABRASIÓN", "QR CONCRETOS", "QR MINERA", "QR CEMENTOS", "QR GRAFITOS"]),
        ("Combustibles", ["QR LODOS", "QR COMBUSTIBLES D", "QR COMBUSTIBLES S", "QR DIESEL D", "QR ASFALTOS"]),
        ("Químicos", ["QR QUIMICOS D", "QR QUIMICOS S", "QR QUIM XLPE", "QR GOM", "QR BARITA"]),
        ("Servicio especial", ["QR VAPOR", "QR ALIMENTOS"]),
    ]

    left = 70
    top = 360
    col_w = 860
    row_h = 120
    for idx, (family, items) in enumerate(families):
        y = top + idx * 140
        draw.rounded_rectangle((left, y, left + col_w, y + row_h), radius=16, fill=PALE, outline=LINE, width=2)
        draw.rounded_rectangle((left, y, left + 220, y + 34), radius=10, fill=RED)
        draw.text((left + 18, y + 17), family.upper(), font=font(16, True), fill=WHITE, anchor="lm")
        item_text = " • ".join(items)
        draw_wrapped(draw, item_text, (left + 20, y + 52), 780, font(19), INK, spacing=5)

    draw.rounded_rectangle((70, 1170, 930, 1220), radius=16, fill=NAVY)
    draw.text((102, 1198), "SCENA puede absorber estas familias como anexo de cobertura comercial y técnica.", font=font(18, True), fill=WHITE, anchor="lm")
    footer(draw, 8, width, height)
    return page


def create_back_cover() -> Image.Image:
    width, height = 1000, 1294
    page = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(page)
    visual = Image.open(ROOT / "public/catalog/conexiones-hidraulicas.webp").convert("RGB")
    visual = cover_fit(visual, (width, 540), focus=(0.5, 0.55))
    page.paste(visual, (0, 0))
    draw.rectangle((0, 0, width, 540), fill=(6, 27, 79), width=0)
    dark_visual = ImageEnhance.Brightness(visual).enhance(0.38)
    page.paste(dark_visual, (0, 0))
    draw.rectangle((0, 0, width, 12), fill=RED)
    draw_logo(draw, 70, 72, scale=1.05, light=True)
    draw.text((70, 268), "LA PIEZA CORRECTA", font=font(48, True), fill=WHITE)
    draw.text((70, 325), "EMPIEZA CON LOS DATOS CORRECTOS.", font=font(36, True), fill=RED)
    draw_wrapped(
        draw,
        "Presión. Temperatura. Fluido. Conexión. Cuatro datos para evitar una selección incorrecta.",
        (70, 402),
        780,
        font(24),
        WHITE,
        spacing=10,
    )
    draw.text((70, 630), "CONTACTO TÉCNICO", font=font(34, True), fill=NAVY)
    cards = [
        ("WhatsApp", CONTACT_PHONE_1),
        ("Llamadas", CONTACT_PHONE_1),
        ("Correo", CONTACT_EMAIL),
    ]
    y = 710
    for label, value in cards:
        draw.rounded_rectangle((70, y, 930, y + 112), radius=14, fill=PALE, outline=LINE, width=2)
        draw.text((104, y + 24), label.upper(), font=font(16, True), fill=RED)
        draw.text((104, y + 60), value, font=font(25, True), fill=NAVY)
        y += 132
    draw.text((70, 1150), "SCENA", font=font(30, True), fill=NAVY)
    draw.text((70, 1192), "Suministro industrial con validación técnica.", font=font(20), fill=MUTED)
    footer(draw, 9, width, height)
    return page


def save_pdf(pages: list[Image.Image], destination: Path) -> None:
    pdf = canvas.Canvas(str(destination))
    pdf.setTitle("Catálogo industrial SCENA 2026")
    pdf.setAuthor("SCENA")
    pdf.setSubject("Mangueras, conexiones, adaptadores y soluciones industriales")
    for page in pages:
        width, height = page.size
        pdf.setPageSize((width, height))
        pdf.drawImage(ImageReader(page), 0, 0, width=width, height=height)
        pdf.showPage()
    pdf.save()


def main() -> None:
    pages = [
        create_cover(),
        create_about(),
        product_page(SOURCE_DIR / "catalogo-hmm-2021-3.png", 3),
        product_page(SOURCE_DIR / "catalogo-hmm-2021-4.png", 4),
        product_page(SOURCE_DIR / "catalogo-hmm-2021-5.png", 5),
        create_adapters_contact(SOURCE_DIR / "catalogo-hmm-2021-6.png"),
        create_keaton_comparison(),
        create_qualityrubber_comparison(),
        create_back_cover(),
    ]
    for index, page in enumerate(pages, start=1):
        page.save(TMP_DIR / f"page-{index}.png", quality=95)
    destination = OUTPUT_DIR / "catalogo-scena-identidad.pdf"
    save_pdf(pages, destination)
    print(destination)


if __name__ == "__main__":
    main()
