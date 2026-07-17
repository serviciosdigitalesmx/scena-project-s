export function sanitizeBrandReferences(text: string): string {
  if (!text) return text;
  let sanitized = text;
  // Replace specific external brands with generic equivalents
  sanitized = sanitized.replace(/Dayco/gi, 'Manguera');
  sanitized = sanitized.replace(/Quality Rubber/gi, 'Manguera');
  sanitized = sanitized.replace(/Keaton Hydraulics/gi, 'Conexión');
  sanitized = sanitized.replace(/Keaton/gi, 'Conexión');
  return sanitized;
}

export function deduplicateSentences(text: string): string {
  if (!text) return text;
  // We can also split by uppercase letters that follow a space if there's missing punctuation
  // But standard split is fine. We will compare lowercased versions to deduplicate.
  const sentences = text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  const uniqueSentences: string[] = [];
  const seenLower = new Set<string>();

  for (const s of sentences) {
    const lower = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // If the sentence is extremely short and just a code, we might skip it or keep it.
    // Let's just do standard deduplication based on normalized characters.
    if (!seenLower.has(lower) && lower.length > 5) {
      seenLower.add(lower);
      uniqueSentences.push(s);
    }
  }
  return uniqueSentences.join(' ');
}

export function normalizeWhitespace(text: string): string {
  if (!text) return text;
  return text.replace(/\s+/g, ' ').trim();
}

export function sanitizeProductDescription(description: string, productName: string, category: string): string {
  if (!description) return description;
  
  let result = description;
  
  // 1. Remove WooCommerce specific tags and generic junk
  // Note: we remove FT_ and Ficha técnica, but we also want to remove the code that sometimes follows them if it's isolated.
  const junkRegex = /Compartir en Facebook|Compartir en Twitter|Valoraciones \(\d+\)|Artículos Recientes|Redes Sociales|Descripción|Ficha técnica(\s+[A-Z0-9-]+)?|Este producto no está disponible porque no quedan existencias\.|SKU: N\/A|SKU:|Tags:|Tag:|FT_([A-Z0-9-]+)?/gi;
  result = result.replace(junkRegex, ' ');

  // 2. Remove isolated categories/brandings appearing as junk (only when they look like standalone category tags, not part of a sentence)
  // We'll remove these if they are capitalized or exactly matching a known junk phrase.
  // Instead of removing "alta presión" everywhere, we only remove exact category breadcrumb strings.
  const breadcrumbs = [
    'MANGUERAS HIDRÁULICAS', 'CONEXIONES HIDRÁULICAS', 'Conexiones Permanentes', 
    'ADAPTADORES', 'De Latón', 'Rosca tubería', 'Sector Hidráulico', 
    'MANGUERA DE SILICON', 'MANGUERA INDUSTRIAL', 'Mangueras de Hule',
    'Alta presión', 'Media presión', 'Extrema presión',
    'Frenos de aire tubing de nylon', 'Abocinado a 45'
  ];
  for (const b of breadcrumbs) {
    result = result.replace(new RegExp(`\\b${b}\\b`, 'g'), ' ');
  }

  // 3. Normalize whitespace
  result = normalizeWhitespace(result);

  // 4. Remove occurrences of the product name within the description
  if (productName && productName.length > 3) {
    const safeProductName = productName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`\\b${safeProductName}\\b`, 'gi'), ' ');
  }

  // 5. Sanitize brand references
  result = sanitizeBrandReferences(result);

  // 6. Fix missing spaces after dots before splitting
  result = result.replace(/\.([A-Z])/g, '. $1');

  // 7. Handle truncated ends
  let sentences = result.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  
  if (sentences.length > 0) {
    const lastSentence = sentences[sentences.length - 1];
    if (!lastSentence.match(/[.!?]$/)) {
      sentences.pop(); 
    }
  }

  if (sentences.length === 0) {
    result = `${productName} - ${category}. Para aplicaciones industriales.`;
  } else {
    result = sentences.join(' ');
  }

  // 8. Deduplicate sentences
  result = deduplicateSentences(result);
  
  // 9. Re-normalize whitespace
  result = normalizeWhitespace(result);

  if (!result) {
    result = `${productName} - ${category}. Para aplicaciones industriales.`;
  }

  return result;
}

export function sanitizeProductName(name: string): string {
  if (!name) return name;
  let result = name;
  result = sanitizeBrandReferences(result);
  result = normalizeWhitespace(result);
  return result;
}
