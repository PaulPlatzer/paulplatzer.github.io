export interface Publication {
  key: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doiUrl?: string;
  pdfLocalUrl?: string;
  tags?: string[];
}

export const publications: Publication[] = [
  {
    key: 'Platzer2021a_JAS',
    authors: 'Platzer, P., Yiou, P., Naveau, P., Filipot, J.-F., Thiébaut, M., & Tandeo, P.',
    year: 2021,
    title: 'Using local dynamics to explain analog forecasting of chaotic systems',
    journal: 'Journal of the Atmospheric Sciences, 78(5), 2117–2133',
    doiUrl: 'https://doi.org/10.1175/JAS-D-20-0204.1',
    pdfLocalUrl: '/assets/pdfs/Using_Local_Dynamics_to_Explain_Analog_Forecasting_of_Chaotic_Systems.pdf',
    tags: ['analogs', 'predictability', 'chaos'],
  },
  {
    key: 'Platzer2021b_JAS',
    authors: 'Platzer, P., Yiou, P., Naveau, P., Tandeo, P., Zhen, Y., Ailliot, P., & Filipot, J.-F.',
    year: 2021,
    title: 'Probability distributions for analog-to-target distances',
    journal: 'Journal of the Atmospheric Sciences, 78(10), 3317–3335',
    doiUrl: 'https://doi.org/10.1175/JAS-D-20-0382.1',
    pdfLocalUrl: '/assets/pdfs/Probability_Distributions_for_Analog-To-Target_Distances.pdf',
    tags: ['analogs', 'extreme events', 'statistics'],
  },
  {
    key: 'Platzer2023_STUOD',
    authors: 'Platzer, P., Chapron, B., & Mémin, E.',
    year: 2023,
    title: 'Dynamical properties of weather regime transitions',
    journal: 'STUOD Proceedings',
    pdfLocalUrl: '/assets/pdfs/232_dyn_prop_weather_reg_transitions_978-3-031-18988-3-3.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'PlatzerChapron2025_STUOD',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2025,
    title: 'Analog-based uncertainty quantification and predictability',
    journal: 'STUOD Proceedings',
    pdfLocalUrl: '/assets/pdfs/unresolved_scales.pdf',
    tags: ['analogs', 'predictability', 'uncertainty'],
  },
  {
    key: 'Platzer2024_CP',
    authors: 'Platzer, P., Yiou, P., & Naveau, P.',
    year: 2024,
    title: 'Could old tide gauges document past extreme events?',
    journal: 'Climate of the Past, 20, 2267–2286',
    doiUrl: 'https://doi.org/10.5194/cp-20-2267-2024',
    pdfLocalUrl: '/assets/pdfs/cp-20-2267-2024.pdf',
    tags: ['extreme events', 'tide gauges', 'climate'],
  },
  {
    key: 'PlatzerChapron2025',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2025,
    title: 'Analog-based dimension estimation',
    journal: 'Journal of Statistical Physics',
    pdfLocalUrl: '/assets/pdfs/Platzer_et_al-2025-Journal_of_Statistical_Physics.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'Platzer2025_npj',
    authors: 'Platzer, P. et al.',
    year: 2025,
    title: 'Analog-based dimension estimation in climate science',
    journal: 'npj Climate and Atmospheric Science',
    pdfLocalUrl: '/assets/pdfs/s41612-025-01086-w.pdf',
    tags: ['analogs', 'dimension', 'climate'],
  },
  {
    key: 'Platzer2025_MWR',
    authors: 'Platzer, P. et al.',
    year: 2025,
    title: 'Gradient-descent optimization of analog distances',
    journal: 'Monthly Weather Review',
    pdfLocalUrl: '/assets/pdfs/Distance_Learning_for_Analog_Methods-1.pdf',
    tags: ['analogs', 'optimization', 'machine learning'],
  },
];
