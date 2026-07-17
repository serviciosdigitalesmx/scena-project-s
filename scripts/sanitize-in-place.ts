import * as fs from 'fs';
import * as path from 'path';
import { sanitizeProductDescription, sanitizeProductName } from '../src/lib/catalog-sanitizer';

const filePath = path.join(process.cwd(), 'src/lib/extended-catalog-generated.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// The file is a JS array export. Let's parse it by extracting the parts.
// Actually, since it's just JSON-like structures in a ts file:
const regex = /"name":\s*"(.*?)",\s*"description":\s*"(.*?)"/g;

content = content.replace(regex, (match, name, description) => {
  const newName = sanitizeProductName(name);
  // We approximate category as we just want to remove junk in the file.
  // The actual category will be applied in catalog-all.ts dynamically, but here we just sanitize.
  const newDesc = sanitizeProductDescription(description, name, 'Conexiones hidráulicas');
  return '"name": "' + newName + '",\n        "description": "' + newDesc + '"';
});

fs.writeFileSync(filePath, content);
console.log('Sanitized extended-catalog-generated.ts in place.');
