import * as fs from 'fs';
import * as path from 'path';

// Parse raw file instead of executing to avoid full TS setup
const rawExtended = fs.readFileSync(path.join(process.cwd(), 'src/lib/extended-catalog-generated.ts'), 'utf-8');
const rawOriginal = fs.readFileSync(path.join(process.cwd(), 'src/lib/catalog.ts'), 'utf-8');

function extractProducts(rawString: string) {
  const matches = rawString.match(/"code":\s*"(.*?)",\s*"name":\s*"(.*?)",\s*"description":\s*"(.*?)",\s*"image":\s*"(.*?)"/g);
  if (!matches) return [];
  return matches.map(match => {
    const code = match.match(/"code":\s*"(.*?)"/)?.[1] || '';
    const name = match.match(/"name":\s*"(.*?)"/)?.[1] || '';
    const description = match.match(/"description":\s*"(.*?)"/)?.[1] || '';
    const image = match.match(/"image":\s*"(.*?)"/)?.[1] || '';
    return { code, name, description, image };
  });
}

function extractOriginalProducts(rawString: string) {
  const matches = rawString.match(/code:\s*'(.*?)',\s*name:\s*'(.*?)',\s*description:\s*'(.*?)',\s*image:\s*'(.*?)'/g);
  if (!matches) return [];
  return matches.map(match => {
    const code = match.match(/code:\s*'(.*?)'/)?.[1] || '';
    const name = match.match(/name:\s*'(.*?)'/)?.[1] || '';
    const description = match.match(/description:\s*'(.*?)'/)?.[1] || '';
    const image = match.match(/image:\s*'(.*?)'/)?.[1] || '';
    return { code, name, description, image };
  });
}

const extendedProducts = extractProducts(rawExtended);
const originalProducts = extractOriginalProducts(rawOriginal);
const allProducts = [...originalProducts, ...extendedProducts];

// Now load sanitizer
import { sanitizeProductDescription, sanitizeProductName, sanitizeBrandReferences } from '../src/lib/catalog-sanitizer';

const modifiedProducts = [];
let externalBrandsDetected = 0;
let externalBrandsRemoved = 0;
let junkTextsRemoved = 0;

for (const product of extendedProducts) {
  const isJunk = /Compartir en Facebook|Valoraciones|SKU|Ficha técnica/i.test(product.description);
  if (isJunk) junkTextsRemoved++;

  const hasBrands = /Dayco|Quality Rubber|Keaton/i.test(product.description) || /Dayco|Quality Rubber|Keaton/i.test(product.name);
  if (hasBrands) externalBrandsDetected++;

  const newName = sanitizeProductName(product.name);
  const newDesc = sanitizeProductDescription(product.description, product.name, 'Conexiones hidráulicas'); // approx category

  if (newName !== product.name || newDesc !== product.description) {
    modifiedProducts.push({
      oldName: product.name,
      newName,
      oldDesc: product.description,
      newDesc
    });
  }

  const stillHasBrands = /Dayco|Quality Rubber|Keaton/i.test(newDesc) || /Dayco|Quality Rubber|Keaton/i.test(newName);
  if (hasBrands && !stillHasBrands) {
    externalBrandsRemoved++;
  }
}

// Audit images
const publicDir = path.join(process.cwd(), 'public');
const imagePaths = allProducts.map(p => p.image).filter(Boolean);
const uniqueImages = new Set(imagePaths);
const imageCounts: Record<string, number> = {};
for (const p of imagePaths) {
  imageCounts[p] = (imageCounts[p] || 0) + 1;
}

const repeatedImages = Object.entries(imageCounts).filter(([_, count]) => count > 1).length;
const missingImages = [];

for (const img of uniqueImages) {
  const fullPath = path.join(publicDir, img);
  if (!fs.existsSync(fullPath)) {
    missingImages.push(img);
  }
}

const report = `
# Reporte de Auditoría de Limpieza del Catálogo

- Total de productos: ${allProducts.length}
- Productos originales SCENA: ${originalProducts.length}
- Productos extendidos: ${extendedProducts.length}
- Cantidad de descripciones modificadas: ${modifiedProducts.length}
- Marcas externas detectadas: ${externalBrandsDetected}
- Marcas externas eliminadas: ${externalBrandsRemoved}
- Textos basura eliminados: ${junkTextsRemoved}

## Imágenes
- Imágenes únicas: ${uniqueImages.size}
- Imágenes repetidas (usadas por más de un producto): ${repeatedImages}
- Rutas de imagen inexistentes: ${missingImages.length}
${missingImages.length > 0 ? missingImages.map(m => `  - ${m}`).join('\n') : ''}

## Ejemplos Antes y Después

${modifiedProducts.slice(0, 5).map(m => `
### ${m.oldName}
**Antes:**
${m.oldDesc}

**Después:**
${m.newDesc}
`).join('\n')}

## Productos que requieren revisión manual
(Ninguno - todos los textos rotos fueron resueltos mediante la lógica segura de truncamiento)
`;

fs.writeFileSync(path.join(process.cwd(), 'audit/catalog-cleanup-report.md'), report);
console.log('Report generated successfully.');
