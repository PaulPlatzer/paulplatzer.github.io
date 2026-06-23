export type PublicationType = 'jp' | 'cp' | 'pp' | 'PhD' | 'r';

export interface Publication {
  key: string;
  type: PublicationType;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doiUrl?: string;
  pdfLocalUrl?: string;
  externalPdfUrl?: string;
  tags?: string[];
}

export const publications: Publication[] = [

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    key: 'Platzer2025_npj',
    type: 'jp',
    authors: 'Platzer, P., Chapron, B., & Messori, G.',
    year: 2025,
    title: 'Disentangling density and geometry in weather regime dimensions using stochastic twins',
    journal: 'npj Climate and Atmospheric Sciences, 8(203)',
    doiUrl: 'https://doi.org/10.1038/s41612-025-01086-w',
    pdfLocalUrl: '/assets/pdfs/s41612-025-01086-w.pdf',
    tags: ['analogs', 'dimension', 'climate'],
  },
  {
    key: 'PlatzerChapron2025',
    type: 'jp',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2025,
    title: 'Density-Induced Variations of Local Dimension Estimates for Absolutely Continuous Random Variables',
    journal: 'Journal of Statistical Physics, 192(34)',
    doiUrl: 'https://doi.org/10.1007/s10955-025-03416-x',
    pdfLocalUrl: '/assets/pdfs/Platzer_et_al-2025-Journal_of_Statistical_Physics.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'Platzer2025_MWR',
    type: 'jp',
    authors: 'Platzer, P., Avenas, A., Chapron, B., Drumetz, L., Mouche, A., Tandeo, P., & Vinour, L.',
    year: 2025,
    title: 'Distance Learning for Analog Methods',
    journal: 'Monthly Weather Review, 153(10)',
    doiUrl: 'https://doi.org/10.1175/MWR-D-24-0204.1',
    pdfLocalUrl: '/assets/pdfs/Distance_Learning_for_Analog_Methods-1.pdf',
    tags: ['analogs', 'optimization', 'machine learning'],
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    key: 'PlatzerChapron2024_STUOD',
    type: 'cp',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2024,
    title: 'The Effects of Unresolved Scales on Analogue Forecasting Ensembles',
    journal: 'Stochastic Transport in Upper Ocean Dynamics III, Springer',
    doiUrl: 'https://doi.org/10.1007/978-3-031-70660-8_10',
    pdfLocalUrl: '/assets/pdfs/unresolved_scales.pdf',
    tags: ['analogs', 'predictability', 'uncertainty'],
  },
  {
    key: 'Platzer2024_CP',
    type: 'jp',
    authors: 'Platzer, P., Ailliot, P., Chapron, B., & Tandeo, P.',
    year: 2024,
    title: 'Could old tide gauges help estimate past atmospheric variability?',
    journal: 'Climate of the Past, 20(10), 2267–2286',
    doiUrl: 'https://doi.org/10.5194/cp-20-2267-2024',
    pdfLocalUrl: '/assets/pdfs/cp-20-2267-2024.pdf',
    tags: ['extreme events', 'tide gauges', 'climate'],
  },
  {
    key: 'Avenas2024_SciRep',
    type: 'jp',
    authors: 'Avenas, A., Chapron, B., Mouche, A., Platzer, P., & Vinour, L.',
    year: 2024,
    title: 'Revealing short-term dynamics of tropical cyclone wind speeds from satellite synthetic aperture radar',
    journal: 'Scientific Reports, 14, 12808',
    doiUrl: 'https://doi.org/10.1038/s41598-024-61384-w',
    pdfLocalUrl: '/assets/pdfs/s41598-024-61384-w.pdf',
    tags: ['tropical cyclones', 'SAR', 'remote sensing'],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    key: 'Platzer2023_STUOD',
    type: 'cp',
    authors: 'Platzer, P., Chapron, B., & Tandeo, P.',
    year: 2023,
    title: 'Dynamical properties of weather regime transitions',
    journal: 'Stochastic Transport in Upper Ocean Dynamics, Springer, pp. 223–236',
    doiUrl: 'https://doi.org/10.1007/978-3-031-18988-3_14',
    pdfLocalUrl: '/assets/pdfs/232_dyn_prop_weather_reg_transitions_978-3-031-18988-3-3.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },

  // ── 2021 ──────────────────────────────────────────────────────────────────
  {
    key: 'Platzer2021b_JAS',
    type: 'jp',
    authors: 'Platzer, P., Yiou, P., Naveau, P., Filipot, J.-F., Thiébaut, M., & Tandeo, P.',
    year: 2021,
    title: 'Probability distributions for analog-to-target distances',
    journal: 'Journal of the Atmospheric Sciences, 78(10), 3317–3335',
    doiUrl: 'https://doi.org/10.1175/JAS-D-20-0382.1',
    pdfLocalUrl: '/assets/pdfs/Probability_Distributions_for_Analog-To-Target_Distances.pdf',
    tags: ['analogs', 'extreme events', 'statistics'],
  },
  {
    key: 'Platzer2021a_JAS',
    type: 'jp',
    authors: 'Platzer, P., Yiou, P., Naveau, P., Tandeo, P., Zhen, Y., Ailliot, P., & Filipot, J.-F.',
    year: 2021,
    title: 'Using local dynamics to explain analog forecasting of chaotic systems',
    journal: 'Journal of the Atmospheric Sciences, 78(5), 2117–2133',
    doiUrl: 'https://doi.org/10.1175/JAS-D-20-0204.1',
    pdfLocalUrl: '/assets/pdfs/Using_Local_Dynamics_to_Explain_Analog_Forecasting_of_Chaotic_Systems.pdf',
    tags: ['analogs', 'predictability', 'chaos'],
  },
  {
    key: 'Varing2021_CE',
    type: 'jp',
    authors: 'Varing, A., Filipot, J.-F., Delpey, M., Guitton, G., Collard, F., Platzer, P., et al.',
    year: 2021,
    title: 'Spatial distribution of wave energy over complex coastal bathymetries',
    journal: 'Coastal Engineering, 169, 103793',
    doiUrl: 'https://doi.org/10.1016/j.coastaleng.2020.103793',
    pdfLocalUrl: '/assets/pdfs/1-s2.0-S0378383920304798-main.pdf',
    tags: ['waves', 'coastal engineering'],
  },

  // ── 2020 ──────────────────────────────────────────────────────────────────
  {
    key: 'Platzer2020_NH',
    type: 'jp',
    authors: 'Platzer, P., Filipot, J.-F., Naveau, P., Tandeo, P., & Yiou, P.',
    year: 2020,
    title: 'Wave group focusing in the ocean: estimations using crest velocities and a Gaussian linear model',
    journal: 'Natural Hazards, 104(3)',
    doiUrl: 'https://doi.org/10.1007/s11069-020-04279-z',
    pdfLocalUrl: '/assets/pdfs/10.1007_s11069-020-04279-z.pdf',
    tags: ['waves', 'natural hazards'],
  },
  {
    key: 'Platzer2020_PhD',
    type: 'PhD',
    authors: 'Platzer, P.',
    year: 2020,
    title: 'Forecasts of dynamical systems from analogs: applications to geophysical variables with a focus on ocean waves',
    journal: 'Doctoral dissertation, École nationale supérieure Mines-Télécom Atlantique',
    doiUrl: 'https://tel.archives-ouvertes.fr/tel-03185865/',
    pdfLocalUrl: '/assets/pdfs/2020IMTA0221_Platzer-Paul.pdf',
    tags: ['analogs', 'ocean waves'],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    key: 'Nexer2019_COME3T',
    type: 'r',
    authors: 'Nexer, M., Damblans, G., Duperret, A., Filipot, J.-F., Maison, A., Morvan, A., Platzer, P., et al.',
    year: 2019,
    title: 'Les parcs éoliens posés peuvent-ils générer des vagues dangereuses?',
    journal: 'Bulletin COME3T n°01, France Energies Marines',
    pdfLocalUrl: '/assets/pdfs/COME3T_bulletin_01_vagues_dangereuses_FR_BD.pdf',
    externalPdfUrl: 'https://www.france-energies-marines.org/wp-content/uploads/2021/01/COME3T_bulletin_01_vagues_dangereuses_FR_BD.pdf',
    tags: ['waves', 'offshore wind'],
  },
  {
    key: 'Platzer2019_CI',
    type: 'cp',
    authors: 'Platzer, P., Yiou, P., Tandeo, P., Naveau, P., & Filipot, J.-F.',
    year: 2019,
    title: 'Predicting analog forecasting errors using dynamical systems',
    journal: 'CI 2019: 9th International Workshop on Climate Informatics',
    externalPdfUrl: 'https://www.researchgate.net/profile/Paul-Platzer/publication/342764705_Predicting_Analog_Forecasting_Errors_using_Dynamical_Systems/links/5f05800c299bf188160a41b6/Predicting-Analog-Forecasting-Errors-using-Dynamical-Systems.pdf',
    tags: ['analogs', 'predictability'],
  },

];
