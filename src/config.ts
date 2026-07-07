/**
 * Site-wide config. Everything meant to be swapped in one place lives here:
 * product name, app URL (the three CTAs), exercise count, contact email.
 */
export interface SiteConfig {
  productName: string;
  /** Wordmark split: renders as {pre}<b>{accent}</b> (accent part in green). */
  wordmark: { pre: string; accent: string };
  companyName: string;
  companyUrl: string;
  /** URL of the live tool — nav, hero, and closing-band CTAs point here. */
  appUrl: string;
  exerciseCount: string;
  contactEmail: string;
  title: string;
  description: string;
}

export const site: SiteConfig = {
  productName: 'MoveNow',
  wordmark: { pre: 'Move', accent: 'Now' },
  companyName: 'move90',
  companyUrl: 'https://move90.com',
  appUrl: '#', // ← point to your live tool URL
  exerciseCount: '500+',
  contactEmail: 'hello@move90.com',
  title: 'MoveNow — Free exercise plans for physios',
  description:
    'Build and print exercise plans in under a minute. Search a library of 500+ movements, add sets, reps and notes, and hand your patient a clean sheet. Free for physiotherapists — no account, no subscription.',
};
