// Static placeholder content modelled on outnortheast.org.uk.
// Swap these arrays for fetch() calls to your CMS when ready.

export const RADIO = {
  name: 'Pride Radio',
  tagline: 'Real voices. Real community.',
  // TODO: confirm raw stream endpoint with Pride Radio (Radioplayer rpId=1448).
  // The /pride-radio page embeds this console player in an iframe.
  streamUrl:
    process.env.EXPO_PUBLIC_RADIO_STREAM_URL ||
    'https://prideradio.co.uk/new_radio_player/console/',
  fm: '89.2FM / DAB',
};

export const EVENTS = [
  { id: 'e1', title: 'Community Kitchen Drop-In', category: 'Social',
    date: '2026-06-10', time: '11:00–14:00', room: 'Community Kitchen',
    desc: 'Drop in for a coffee and a chat. Everyone welcome — a relaxed, sober space.' },
  { id: 'e2', title: 'Wellbeing Yoga', category: 'Wellbeing',
    date: '2026-06-11', time: '18:00–19:00', room: 'Cashman Room',
    desc: 'Gentle, inclusive yoga for all bodies and abilities.' },
  { id: 'e3', title: 'Queer Film Screening', category: 'Creative',
    date: '2026-06-12', time: '19:30–21:30', room: 'Stonewall Space',
    desc: 'Community cinema night on the big screen, with discussion after.' },
  { id: 'e4', title: 'Gender Identity Peer Chat', category: 'Support',
    date: '2026-06-13', time: '17:00–18:30', room: 'Chatterbox',
    desc: 'A quiet, confidential space for peer-to-peer support.' },
  { id: 'e5', title: 'Spray It With Pride Workshop', category: 'Creative',
    date: '2026-06-14', time: '13:00–16:00', room: 'Studio 2',
    desc: 'Learn stencilling and spray-paint skills with artist Ida4.' },
];

export const CATEGORIES = ['All', 'Social', 'Wellbeing', 'Creative', 'Support'];

export const SHOWS = [
  { id: 's1', title: 'Drop In Queer Edition — Ep 1', type: 'Podcast' },
  { id: 's2', title: 'Drop In Queer Edition — Ep 2', type: 'Podcast' },
  { id: 's3', title: 'Morning Pride', type: 'Live show', time: 'Weekdays 08:00' },
];

export const PROJECTS = [
  { id: 'p1', title: 'Spray It With Pride',
    desc: 'A public art project celebrating LGBTQ+ history and Pride across the North East.' },
  { id: 'p2', title: 'Drop In Queer Edition',
    desc: 'A community podcast sharing queer voices and stories from the region.' },
  // TODO: restore your original p3 entry here if it existed in the repo.
  { id: 'p4', title: 'Fighting With Pride',
    desc: 'Supporting LGBTQ+ veterans affected by the historic Armed Forces ban.' },
];

export const VOLUNTEER_ROLES = [
  'Befriending Officer', 'Event & Festival Officer', 'Group Support Officer',
  'LGBTQ+ Arts Officer', 'LGBTQ+ History Officer', 'LGBTQ+ Outreach Officer',
  'LGBTQ+ Research Officer', 'Pride Radio Officer',
];

const SITE = 'https://www.outnortheast.org.uk';

// Outbound links. Confirmed values verified against the live site.
export const LINKS = {
  donate: 'https://gtap.uk/N3KPHV',               // confirmed
  volunteer: `${SITE}/Support-Us`,                // confirmed (no separate page)
  shop: `${SITE}/Support-Us`,                      // confirmed (no separate page)
  contact: `${SITE}/contact7922ef62`,             // confirmed
  privacy: `${SITE}/privacy-poicey`,              // confirmed (slug is misspelled on the live site)
  visionPdf:
    'https://irp.cdn-website.com/cc91dfec/files/uploaded/OUT+North+East+Vision+.pdf',
  // TODO: replace with a precise maps link for the ONE Centre address.
  directions: 'https://maps.google.com/?q=2B+Stonehills+Pelaw+Gateshead+NE10+0HW',

  oneCentre: `${SITE}/one-centre52864301`,
  spaces: `${SITE}/spaces`,
  calendarOneCentre: `${SITE}/calendar04bbf9a6`,
  projectsReports: `${SITE}/projects---reports`,
  reports: `${SITE}/reports3d8cad35`,
  projects: `${SITE}/projects`,
  events: `${SITE}/events069d3a66`,
  calendarEvents: `${SITE}/calendar`,
  summerOfPride: `${SITE}/summer-of-pride`,
  training: `${SITE}/training327a44c2`,
  prideRadioPage: `${SITE}/pride-radio`,
  news: `${SITE}/copy-of-2025-south-tyneside-events`,
};

export const SOCIAL = [
  { id: 'facebook', label: 'Facebook', icon: 'logo-facebook', url: 'https://www.facebook.com/outnortheast' },
  { id: 'instagram', label: 'Instagram', icon: 'logo-instagram', url: 'https://www.instagram.com/outnortheast/' },
  { id: 'tiktok', label: 'TikTok', icon: 'logo-tiktok', url: 'https://www.tiktok.com/@outnortheast' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'logo-linkedin', url: 'https://www.linkedin.com/company/out-north-east/' },
  { id: 'youtube', label: 'YouTube', icon: 'logo-youtube', url: 'http://www.youtube.com/@OUTNorthEast1' },
  { id: 'threads', label: 'Threads', icon: 'logo-threads', url: 'https://www.threads.com/@outnortheast' },
];

export const CONTACT = {
  phone: '0191 695 1969',
  phoneLink: 'tel:01916951969',
  email: 'Contactus@outnortheast.org.uk',
  emailLink: 'mailto:Contactus@outnortheast.org.uk',
  address: '2B Stonehills, Pelaw, Gateshead, NE10 0HW',
  charityNumber: '1177074',
  funder: 'https://www.tnlcommunityfund.org.uk/',
};

// Sections surfaced as outbound links from the More screen.
export const EXPLORE = [
  { id: 'onecentre', label: 'The ONE Centre', url: LINKS.oneCentre },
  { id: 'spaces', label: 'Spaces', url: LINKS.spaces },
  { id: 'summer', label: 'Summer of Pride', url: LINKS.summerOfPride },
  { id: 'reports', label: 'Research & Reports', url: LINKS.reports },
  { id: 'training', label: 'Training', url: LINKS.training },
  { id: 'news', label: 'News', url: LINKS.news },
  { id: 'vision', label: 'Download our Vision (PDF)', url: LINKS.visionPdf },
];
