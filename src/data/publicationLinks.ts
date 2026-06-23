/**
 * Maps a short publication key to a locally hosted PDF path under /assets/pdfs/.
 * PDFs are synced from content/papers_pdfs/ by `npm run sync:assets`.
 * Keys match those used in publications.ts and inline references in research-themes.astro.
 * Keys with no available local PDF are omitted; the conditional rendering in
 * research-themes.astro will simply suppress the link.
 */
export const pdfLinks: Record<string, string> = {
  // 2025
  'Platzer2025_npj':          '/assets/pdfs/s41612-025-01086-w.pdf',
  'PlatzerChapron2025':       '/assets/pdfs/Platzer_et_al-2025-Journal_of_Statistical_Physics.pdf',
  'Platzer2025_MWR':          '/assets/pdfs/Distance_Learning_for_Analog_Methods-1.pdf',
  // 2024
  'PlatzerChapron2024_STUOD': '/assets/pdfs/unresolved_scales.pdf',
  'Platzer2024_CP':           '/assets/pdfs/cp-20-2267-2024.pdf',
  'Avenas2024_SciRep':        '/assets/pdfs/s41598-024-61384-w.pdf',
  // 2023
  'Platzer2023_STUOD':        '/assets/pdfs/232_dyn_prop_weather_reg_transitions_978-3-031-18988-3-3.pdf',
  // 2021
  'Platzer2021b_JAS':         '/assets/pdfs/Probability_Distributions_for_Analog-To-Target_Distances.pdf',
  'Platzer2021a_JAS':         '/assets/pdfs/Using_Local_Dynamics_to_Explain_Analog_Forecasting_of_Chaotic_Systems.pdf',
  'Varing2021_CE':            '/assets/pdfs/1-s2.0-S0378383920304798-main.pdf',
  // 2020
  'Platzer2020_NH':           '/assets/pdfs/10.1007_s11069-020-04279-z.pdf',
  'Platzer2020_PhD':          '/assets/pdfs/2020IMTA0221_Platzer-Paul.pdf',
  // 2019
  'Nexer2019_COME3T':         '/assets/pdfs/COME3T_bulletin_01_vagues_dangereuses_FR_BD.pdf',
};
