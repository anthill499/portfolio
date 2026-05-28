// Chip/tag color classes keyed by color name.
// Use chipColors[color] to get the Tailwind classes for a colored pill.
export const chipColors = {
  // -- Existing --
  purple: 'bg-[#EDE9FE] dark:bg-[#2D1B69] text-[#6D28D9] dark:text-[#A78BFA]',
  blue:   'bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA]',
  green:  'bg-[#D1FAE5] dark:bg-[#064E3B] text-[#065F46] dark:text-[#34D399]',
  orange: 'bg-[#FEF3C7] dark:bg-[#451A03] text-[#92400E] dark:text-[#FCD34D]',
  red:    'bg-[#FEE2E2] dark:bg-[#450A0A] text-[#B91C1C] dark:text-[#FCA5A5]',
  gray:   'bg-[#F3F4F6] dark:bg-[#2A2A2A] text-[#374151] dark:text-[#9B9B9B]',

  // -- New --
  yellow: 'bg-[#FEF9C3] dark:bg-[#422006] text-[#854D0E] dark:text-[#FDE047]',
  pink:   'bg-[#FCE7F3] dark:bg-[#500724] text-[#9D174D] dark:text-[#F9A8D4]',
  teal:   'bg-[#CCFBF1] dark:bg-[#042F2E] text-[#0F766E] dark:text-[#5EEAD4]',
  indigo: 'bg-[#E0E7FF] dark:bg-[#1E1B4B] text-[#3730A3] dark:text-[#A5B4FC]',
  brown:  'bg-[#F5EFE8] dark:bg-[#1C1917] text-[#78350F] dark:text-[#D4B896]',
  lime:   'bg-[#ECFCCB] dark:bg-[#1A2E05] text-[#3F6212] dark:text-[#BEF264]',
  sky:    'bg-[#E0F2FE] dark:bg-[#082F49] text-[#0369A1] dark:text-[#7DD3FC]',
  black:  'bg-[#F3F4F6] dark:bg-[#111111] text-[#111111] dark:text-[#E5E7EB]',
}

// Status/employment-type tag colors — delegates to chipColors so they stay in sync.
export const tagColors = {
  purple: chipColors.purple,
  blue:   chipColors.blue,
  green:  chipColors.green,
  orange: chipColors.orange,
  red:    chipColors.red,
  gray:   chipColors.gray,
  yellow: chipColors.yellow,
  pink:   chipColors.pink,
  teal:   chipColors.teal,
  indigo: chipColors.indigo,
  brown:  chipColors.brown,
  lime:   chipColors.lime,
  sky:    chipColors.sky,
  black:  chipColors.black,
}

// Maps technology names to their chip color key.
// Add new techs here as the projects section grows.
export const techColorMap = {
  React:        'blue',
  TypeScript:   'blue',
  JavaScript:   'orange',
  'Node.js':    'green',
  WebSockets:   'green',
  PostgreSQL:   'blue',
  Python:       'green',
  Click:        'gray',
  Jinja2:       'gray',
  'D3.js':      'orange',
  Redis:        'red',
  Docker:       'blue',
  Flutter:      'blue',
  Dart:         'blue',
  'Next.js':    'gray',
  GraphQL:      'purple',
  AWS:          'orange',
  Git:          'gray',
  Linux:        'gray',
}
