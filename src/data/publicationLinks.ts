/**
 * Maps a short publication key to a locally hosted PDF path under /assets/pdfs/.
 * PDFs are synced from content/papers_pdfs/ by `npm run sync:assets`.
 * Keys match those used in publications.ts and inline references in research-themes.astro.
 * Keys with no available local PDF are omitted; the conditional rendering in
 * research-themes.astro will simply suppress the link.
 */
export const pdfLinks: Record<string, string> = {
  'Platzer2021a_JAS':   '/assets/pdfs/Using_Local_Dynamics_to_Explain_Analog_Forecasting_of_Chaotic_Systems.pdf',
  'Platzer2021b_JAS':   '/assets/pdfs/Probability_Distributions_for_Analog-To-Target_Distances.pdf',
  'PlatzerChapron2025': '/assets/pdfs/Platzer_et_al-2025-Journal_of_Statistical_Physics.pdf',
  'Platzer2025_npj':    '/assets/pdfs/s41612-025-01086-w.pdf',
  'Platzer2025_MWR':    '/assets/pdfs/Distance_Learning_for_Analog_Methods-1.pdf',
};
