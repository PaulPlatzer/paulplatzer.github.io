/**
 * TODO: Fill this list to reproduce exactly the content from:
 * https://paulplatzer.wordpress.com/presentations/
 *
 * For each talk, add authors, title, venue, date, and optionally a slides or abstract URL.
 */
export interface Talk {
  title: string;
  venue: string;
  location?: string;
  date: string;
  slidesUrl?: string;
  type?: 'oral' | 'poster' | 'invited';
}

export const talks: Talk[] = [
  {
    title: 'Placeholder talk — replace with content from WordPress presentations page',
    venue: 'Example Conference',
    location: 'Example City, Country',
    date: '2025',
    type: 'oral',
  },
];
