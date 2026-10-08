type TagCategory = 'discipline' | 'platform' | 'focus'

const tagCategories: Record<string, TagCategory> = {
  'UX/UI': 'discipline',
  'UI': 'discipline',
  'Brand Design': 'discipline',
  'Design System': 'discipline',
  'Illustration System': 'discipline',

  'Web': 'platform',
  'Web App': 'platform',
  'Landing Page': 'platform',
  'Client Portal': 'platform',
  'Mobile': 'platform',
  'iOS': 'platform',

  'Accessibility': 'focus',
  'Ordering Flow': 'focus',
}

const categoryClasses: Record<TagCategory, string> = {
  discipline: 'bg-[var(--paleOrange)]',
  platform: 'bg-[var(--paleBlue)]',
  focus: 'bg-[var(--paleGreen)]',
}

export const getTagColor = (tag: string) => {
  const category = tagCategories[tag]
  const color = category ? categoryClasses[category] : 'bg-gray-200'
  return `${color} text-[var(--blackish)] font-semibold`
}
