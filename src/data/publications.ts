/**
 * TODO: Fill this list from the full publication list at:
 * https://paulplatzer.wordpress.com/home/publications/
 *
 * For each entry, place the author-copy PDF in /public/assets/pdfs/
 * and reference it via the pdfLocalUrl field.
 * Set doiUrl to the DOI link for the published version.
 */
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
    pdfLocalUrl: '/assets/pdfs/Platzer2021a_JAS.pdf',
    tags: ['analogs', 'predictability', 'chaos'],
  },
  {
    key: 'Platzer2021b_JAS',
    authors: 'Platzer, P., Yiou, P., Naveau, P., Tandeo, P., Zhen, Y., Ailliot, P., & Filipot, J.-F.',
    year: 2021,
    title: 'Probability distributions for analog-to-target distances',
    journal: 'Journal of the Atmospheric Sciences, 78(10), 3317–3335',
    doiUrl: 'https://doi.org/10.1175/JAS-D-20-0382.1',
    pdfLocalUrl: '/assets/pdfs/Platzer2021b_JAS.pdf',
    tags: ['analogs', 'extreme events', 'statistics'],
  },
  {
    key: 'Platzer2022_STUOD',
    authors: 'Platzer, P., Chapron, B., & Mémin, E.',
    year: 2022,
    title: 'Estimation of attractor dimension using analogs',
    journal: 'STUOD Proceedings',
    pdfLocalUrl: '/assets/pdfs/Platzer2022_STUOD.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'PlatzerChapron2024',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2024,
    title: 'Analog-based uncertainty quantification and predictability',
    journal: 'STUOD Proceedings',
    pdfLocalUrl: '/assets/pdfs/PlatzerChapron2024_STUOD.pdf',
    tags: ['analogs', 'predictability', 'uncertainty'],
  },
  {
    key: 'Platzer2024_CP',
    authors: 'Platzer, P., Yiou, P., & Naveau, P.',
    year: 2024,
    title: 'Analog-based estimation of extreme event probabilities',
    journal: 'Climate of the Past',
    // TODO: fill in DOI once published
    pdfLocalUrl: '/assets/pdfs/Platzer2024_CP.pdf',
    tags: ['analogs', 'extreme events', 'climate'],
  },
  {
    key: 'PlatzerChapron2025',
    authors: 'Platzer, P. & Chapron, B.',
    year: 2025,
    title: 'Analog-based dimension estimation',
    journal: 'Journal of Statistical Physics',
    // TODO: fill in DOI once published
    pdfLocalUrl: '/assets/pdfs/PlatzerChapron2025_JSP.pdf',
    tags: ['analogs', 'dimension', 'dynamical systems'],
  },
  {
    key: 'Platzer2025_npj',
    authors: 'Platzer, P. et al.',
    year: 2025,
    title: 'Analog-based dimension estimation in climate science',
    journal: 'npj Climate and Atmospheric Science',
    // TODO: fill in DOI and full author list once published
    pdfLocalUrl: '/assets/pdfs/Platzer2025_npj.pdf',
    tags: ['analogs', 'dimension', 'climate'],
  },
  {
    key: 'Platzer2025_MWR',
    authors: 'Platzer, P. et al.',
    year: 2025,
    title: 'Gradient-descent optimization of analog distances',
    journal: 'Monthly Weather Review',
    // TODO: fill in DOI and full author list once published
    pdfLocalUrl: '/assets/pdfs/Platzer2025_MWR.pdf',
    tags: ['analogs', 'optimization', 'machine learning'],
  },
];
