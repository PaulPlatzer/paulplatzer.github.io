import { copyFileSync, mkdirSync, readdirSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);
const EXPECTED_ANALOG_FIGURES = [
  'sst_analog_vs_nonanalog_anomaly.png',
  'z500_analog_vs_nonanalog_detrended_values.png',
];

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
const destCv     = join(ROOT, 'public/assets/cv');
const destTalks  = join(ROOT, 'public/assets/talks');
const destFigures = join(ROOT, 'public/assets/figures');
ensureDir(destImages);
ensureDir(destPdfs);
ensureDir(destLogos);
ensureDir(destCv);
ensureDir(destTalks);
ensureDir(destFigures);
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

// ── pyanalogs logo ──────────────────────────────────────────────────────────
console.log('\n[5] pyanalogs logo (content/logo_pyanalogs/)');
const pyanalogsLogoSrc = join(ROOT, 'content/logo_pyanalogs/logo.svg');
if (existsSync(pyanalogsLogoSrc)) {
  copyFile(pyanalogsLogoSrc, join(destLogos, 'pyanalogs_logo.svg'),
    'logo.svg → public/assets/logos/pyanalogs_logo.svg');
} else {
  console.warn('  WARNING: content/logo_pyanalogs/logo.svg not found — skipping');
}

// ── CV PDF ───────────────────────────────────────────────────────────────────
console.log('\n[6] CV PDF (content/CV/)');
const cvDir = join(ROOT, 'content/CV');
if (existsSync(cvDir)) {
  const pdfs = readdirSync(cvDir)
    .filter(f => !f.startsWith('.') && extname(f).toLowerCase() === '.pdf');
  if (pdfs.length === 0) {
    console.warn('  WARNING: no PDF found in content/CV/ — skipping');
  } else {
    let chosen = pdfs[0];
    if (pdfs.length > 1) {
      chosen = pdfs.reduce((a, b) =>
        statSync(join(cvDir, a)).mtimeMs >= statSync(join(cvDir, b)).mtimeMs ? a : b
      );
      console.log(`  (multiple PDFs found; selected most recent: ${chosen})`);
    }
    copyFile(join(cvDir, chosen), join(destCv, 'cv_paul_platzer.pdf'),
      `${chosen} → public/assets/cv/cv_paul_platzer.pdf`);
  }
} else {
  console.warn('  WARNING: content/CV/ not found — skipping');
}

// ── Talk slide PDFs ─────────────────────────────────────────────────────────
console.log('\n[7] Talk slide PDFs (content/talks_slides/)');
const talksSlidesDir = join(ROOT, 'content/talks_slides');
if (existsSync(talksSlidesDir)) {
  const files = readdirSync(talksSlidesDir);
  let count = 0;
  for (const file of files) {
    if (file.startsWith('.')) continue;
    if (extname(file).toLowerCase() !== '.pdf') continue;
    copyFile(join(talksSlidesDir, file), join(destTalks, file),
      `${file} → public/assets/talks/`);
    count++;
  }
  if (count === 0) console.warn('  WARNING: no PDF files found in content/talks_slides/');
} else {
  console.warn('  WARNING: content/talks_slides/ not found — skipping');
}

// ── Analog example figures ─────────────────────────────────────────────────
console.log('\n[8] Analog example figures (content/analogs_examples/)');
const analogsExamplesDir = join(ROOT, 'content/analogs_examples');
if (existsSync(analogsExamplesDir)) {
  const files = readdirSync(analogsExamplesDir);
  const imageFiles = files.filter(file =>
    !file.startsWith('.') && IMAGE_EXTS.has(extname(file).toLowerCase())
  );

  for (const expected of EXPECTED_ANALOG_FIGURES) {
    if (!files.includes(expected)) {
      console.warn(`  WARNING: content/analogs_examples/${expected} not found`);
    }
  }

  let count = 0;
  for (const file of imageFiles) {
    copyFile(join(analogsExamplesDir, file), join(destFigures, file),
      `${file} → public/assets/figures/`);
    count++;
  }
  if (count === 0) console.warn('  WARNING: no image files found in content/analogs_examples/');
} else {
  console.warn('  WARNING: content/analogs_examples/ not found — skipping');
  for (const expected of EXPECTED_ANALOG_FIGURES) {
    console.warn(`  WARNING: content/analogs_examples/${expected} not found`);
  }
}

console.log('\nSync complete.');
