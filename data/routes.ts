const routes = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/clubs',
    name: 'EconClubs',
    dropRoutes: [
      {
        href: '/students',
        name: 'For Students',
      },
      {
        href: '/teachers',
        name: 'For Teachers',
      },
      {
        href: '/current-clubs',
        name: 'Current Clubs',
      },
      {
        href: '/register',
        name: 'Register',
      },
    ],
  },
  {
    href: '/people',
    name: 'People',
    dropRoutes: [
      { href: '/team', name: 'Team' },
      {
        href: '/advisory-board',
        name: 'Advisory Board',
      },
      { href: '/apply', name: 'Join our Team' },
    ],
  },
  {
    href: '/events',
    name: 'Events',
    dropRoutes: [
      { href: '/', name: 'Overview' },
      { href: '/econbowl', name: 'EconBowl' },
      { href: '/econolympiad', name: 'EconOlympiad' },
      { href: '/alumnipanel', name: 'Alumni Panel' },
      { href: '/econtalks', name: 'EconTalks' },
      { href: '/wows', name: 'WOWS' },
    ],
  },
  {
    href: '/flip',
    name: 'FLIP',
  },
  {
    href: '/blog',
    name: 'Blog',
  },
  {
    href: '/resources',
    name: 'Resources',
    dropRoutes: [
      { href: '/', name: 'Overview' },
      { href: '/econbowl-prep', name: 'EconBowl Prep' },
      {
        href: 'https://learn.theyei.org',
        name: 'Learn',
        newItem: true,
        externalLink: true,
      },
    ],
  },
]

export default routes
