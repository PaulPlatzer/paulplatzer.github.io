/**
 * Maps a short publication key to a locally hosted PDF path.
 * PDFs should be placed in /public/assets/pdfs/
 * Keys match those used in publications.ts and inline references in research-themes.astro.
 *
 * TODO: Add real PDF files to /public/assets/pdfs/ and fill in the paths below.
 */
export const pdfLinks: Record<string, string> = {
  'Platzer2021a_JAS':     '/assets/pdfs/Platzer2021a_JAS.pdf',
  'Platzer2021b_JAS':     '/assets/pdfs/Platzer2021b_JAS.pdf',
  'Platzer2022_STUOD':    '/assets/pdfs/Platzer2022_STUOD.pdf',
  'PlatzerChapron2024':   '/assets/pdfs/PlatzerChapron2024_STUOD.pdf',
  'Platzer2024_CP':       '/assets/pdfs/Platzer2024_CP.pdf',
  'PlatzerChapron2025':   '/assets/pdfs/PlatzerChapron2025_JSP.pdf',
  'Platzer2025_npj':      '/assets/pdfs/Platzer2025_npj.pdf',
  'Platzer2025_MWR':      '/assets/pdfs/Platzer2025_MWR.pdf',
};
