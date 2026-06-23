export interface NavItem {
  label: string;
  href: string;
  /** Set to false to hide from the sidebar while keeping the page buildable. */
  visible: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Home/about',        href: '/',                  visible: true  },
  { label: 'Research themes',   href: '/research-themes',   visible: true  },
  { label: 'Publications list', href: '/publications',      visible: true  },
  { label: 'Projects',          href: '/projects',          visible: true  },
  // TODO: set visible: true once pyanalogs is publicly released
  { label: 'Code',              href: '/code',              visible: false },
  { label: 'Talks list',        href: '/talks',             visible: true  },
  { label: 'Teaching',          href: '/teaching',          visible: true  },
  // TODO: set visible: true once the CV is up to date
  { label: 'CV',                href: '/cv',                visible: false },
  { label: 'Music',             href: '/music',             visible: true  },
  { label: 'Contact',           href: '/contact',           visible: true  },
];
