// Static placeholder content modelled on outnortheast.org.uk.
// Swap these arrays for fetch() calls to your CMS when ready.

export const RADIO = {
  name: 'Pride Radio',
  tagline: 'Real voices. Real community.',
  // Replace with the real Pride Radio stream URL when available:
  streamUrl: process.env.EXPO_PUBLIC_RADIO_STREAM_URL || 'https://prideradio.co.uk/new_radio_player/console/',
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
    desc: 'A community podcast built from the ground up by an LGBTQ+ group in Gateshead.' },
  { id: 'p3', title: 'Healthy Choices',
    desc: 'Food, growing and wellbeing sessions for LGBTQ+ people and families.' },
  { id: 'p4', title: 'Fighting With Pride',
    desc: 'Supporting LGBTQ+ veterans affected by the historic Armed Forces ban.' },
];

export const VOLUNTEER_ROLES = [
  'Befriending Officer', 'Event & Festival Officer', 'Group Support Officer',
  'LGBTQ+ Arts Officer', 'LGBTQ+ History Officer', 'LGBTQ+ Outreach Officer',
  'LGBTQ+ Research Officer', 'Pride Radio Officer',
];

export const LINKS = {
  donate: 'https://www.outnortheast.org.uk/Support-Us',
  volunteer: 'https://www.outnortheast.org.uk/Support-Us',
  shop: 'https://www.outnortheast.org.uk/Support-Us',
  contact: 'https://www.outnortheast.org.uk/contact7922ef62',
  directions: 'https://maps.google.com/?q=ONE+Centre+Gateshead',
};
