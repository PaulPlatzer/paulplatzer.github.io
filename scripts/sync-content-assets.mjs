import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function sanitizePdfName(filename) {
  // Strip leading "[... - Journal Name] " blocks (common in downloaded PDFs)
  let name = filename.replace(/^\[.*?\]\s*/, '');
  // Replace spaces with underscores
  name = name.replace(/\s+/g, '_');
  // Remove remaining square brackets
  name = name.replace(/[\[\]]/g, '');
  return name;
}

function copyFile(src, dst, label) {
  copyFileSync(src, dst);
  console.log(`  copied: ${label}`);
}

// ── Create destination directories ──────────────────────────────────────────
const destImages = join(ROOT, 'public/assets/images');
const destPdfs   = join(ROOT, 'public/assets/pdfs');
const destLogos  = join(ROOT, 'public/assets/logos');
ensureDir(destImages);
ensureDir(destPdfs);
ensureDir(destLogos);
console.log('Destination folders ready.');

// ── Profile photo ────────────────────────────────────────────────────────────
console.log('\n[1] Profile photo');
const photoSrc = join(ROOT, 'content/paul_platzer_bandeau-1.webp');
if (existsSync(photoSrc)) {
  copyFile(photoSrc, join(destImages, 'paul_platzer_bandeau-1.webp'),
    'paul_platzer_bandeau-1.webp → public/assets/images/');
} else {
  console.warn('  WARNING: content/paul_platzer_bandeau-1.webp not found — skipping');
}

// ── Paper PDFs ───────────────────────────────────────────────────────────────
console.log('\n[2] Paper PDFs (content/papers_pdfs/)');
const papersPdfsDir = join(ROOT, 'content/papers_pdfs');
if (existsSync(papersPdfsDir)) {
  const files = readdirSync(papersPdfsDir);
  let count = 0;
  for (const file of files) {
    if (file.startsWith('.')) continue;
    if (extname(file).toLowerCase() !== '.pdf') continue;
    const sanitized = sanitizePdfName(file);
    const renamed = sanitized !== file ? ` (sanitized from: ${file})` : '';
    copyFile(join(papersPdfsDir, file), join(destPdfs, sanitized),
      `${sanitized} → public/assets/pdfs/${renamed}`);
    count++;
  }
  if (count === 0) console.warn('  WARNING: no PDF files found in content/papers_pdfs/');
} else {
  console.warn('  WARNING: content/papers_pdfs/ not found — skipping');
}

// ── DYNADIST-NA concept note (canonical copy from dynadist-na/) ──────────────
console.log('\n[3] DYNADIST-NA concept note (content/dynadist-na/)');
const conceptSrc = join(ROOT, 'content/dynadist-na/DYNADIST_NA_Concept_Note.pdf');
if (existsSync(conceptSrc)) {
  copyFile(conceptSrc, join(destPdfs, 'DYNADIST_NA_Concept_Note.pdf'),
    'DYNADIST_NA_Concept_Note.pdf → public/assets/pdfs/');
} else {
  console.warn('  WARNING: content/dynadist-na/DYNADIST_NA_Concept_Note.pdf not found — skipping');
}

// ── DYNADIST-NA logos ────────────────────────────────────────────────────────
console.log('\n[4] DYNADIST-NA logos (content/dynadist-na/logos/)');
const logosDir = join(ROOT, 'content/dynadist-na/logos');
if (existsSync(logosDir)) {
  const files = readdirSync(logosDir);
  let count = 0;
  for (const file of files) {
    if (file.startsWith('.')) continue;
    if (!IMAGE_EXTS.has(extname(file).toLowerCase())) continue;
    copyFile(join(logosDir, file), join(destLogos, file),
      `${file} → public/assets/logos/`);
    count++;
  }
  if (count === 0) console.warn('  WARNING: no image files found in content/dynadist-na/logos/');
} else {
  console.warn('  WARNING: content/dynadist-na/logos/ not found — skipping');
}

console.log('\nSync complete.');
