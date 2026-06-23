export type TalkType = 'oral' | 'poster' | 'invited' | 'seminar' | 'other';

export interface Talk {
  title: string;
  authors?: string;
  venue: string;
  location?: string;
  date: string;
  year: number;
  type?: TalkType;
  slidesUrl?: string;
  videoUrl?: string;
  abstractUrl?: string;
  eventUrl?: string;
  note?: string;
}

export const talks: Talk[] = [

  {
    title: 'Dimensions, Weather Regimes, Optimal Distances',
    venue: 'LOPS Seminar',
    location: 'Brest, France',
    date: 'April 2025',
    year: 2025,
    type: 'seminar',
    slidesUrl: 'https://paulplatzer.wordpress.com/wp-content/uploads/2025/04/presentation_lops-1.pdf',
  },

  {
    title: 'Distance Learning for Analog Methods',
    venue: 'Colloque Climat et Impacts (8e édition)',
    location: 'ENS Paris-Saclay, France',
    date: 'November 2024',
    year: 2024,
    type: 'oral',
    slidesUrl: 'https://paulplatzer.wordpress.com/wp-content/uploads/2025/01/presentation_climatimpacts_platzer_update.pdf',
    eventUrl: 'https://premc.org/climat-impacts-2024/',
  },

  {
    title: 'Using Tide Gauge Measurements to Reduce Uncertainties in Historical Atmospheric Reanalysis',
    venue: 'Sea Level Workshop',
    location: 'Brest, France',
    date: 'June 2022',
    year: 2022,
    type: 'oral',
    slidesUrl: 'https://paulplatzer.wordpress.com/wp-content/uploads/2023/05/slw2022___preliminary_study_on_using_tide_gauge_measurements_to_reduce_uncertainty_in_historical_atmospheric_reanalysis.pdf',
    eventUrl: 'https://2022-sealevel.sciencesconf.org/',
  },

  {
    title: 'Intercomparison of Analogue Forecasts',
    venue: '2nd Stochastic Transport in Upper Ocean Dynamics Annual Workshop',
    location: 'London, UK',
    date: 'September 2021',
    year: 2021,
    type: 'oral',
    slidesUrl: 'https://paulplatzer.wordpress.com/wp-content/uploads/2021/10/intercomparison_of_analogue_stochastic_forecasts.pdf',
    eventUrl: 'https://www.imperial.ac.uk/events/137336/2nd-stochastic-transport-in-upper-ocean-dynamics-annual-workshop-2/',
  },

  {
    title: 'Finding Analogues of Dynamical Systems',
    venue: 'Graduate School Mathematics of Random Systems: Analysis, Modelling and Algorithms',
    date: 'September 2021',
    year: 2021,
    type: 'oral',
    slidesUrl: 'http://math.ac.vn/conference/GMRS2021/images/PaulPlatzer_Presentation.pdf',
    eventUrl: 'http://math.ac.vn/conference/GMRS2021/index.php?option=com_content&view=article&id=87:home&catid=78:hoi-nghi&Itemid=435&lang=vi',
  },

  {
    title: 'PhD Defense',
    venue: 'École nationale supérieure Mines-Télécom Atlantique',
    location: 'Brest, France',
    date: 'December 2020',
    year: 2020,
    type: 'other',
    slidesUrl: 'https://paulplatzer.wordpress.com/wp-content/uploads/2021/10/defense_platzer_2020.pdf',
    videoUrl: 'https://youtu.be/SkHceNLNyrY',
  },

];
