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
    key: 'Platzer2022_STUOD',
    authors: 'Platzer, P., Chapron, B., & Mémin, E.',
    year: 2022,
    title: 'Estimation of attractor dimension using analogs',
    journal: 'STUOD Proceedings',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'PlatzerChapron2024',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2024,
    title: 'Analog-based uncertainty quantification and predictability',
    journal: 'STUOD Proceedings',
    tags: ['analogs', 'predictability', 'uncertainty'],
  },
  {
    key: 'Platzer2024_CP',
    authors: 'Platzer, P., Yiou, P., & Naveau, P.',
    year: 2024,
    title: 'Analog-based estimation of extreme event probabilities',
    journal: 'Climate of the Past',
    tags: ['analogs', 'extreme events', 'climate'],
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
