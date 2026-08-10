import { ChefHat, Flame, Leaf, Sparkles, Star, WheatOff } from 'lucide-react'

const badgeConfig = {
  popular: { label: 'פופולרי', Icon: Star },
  chef: { label: 'בחירת השף', Icon: ChefHat },
  new: { label: 'חדש', Icon: Sparkles },
  spicy: { label: 'פיקנטי', Icon: Flame },
  vegetarian: { label: 'צמחוני', Icon: Leaf },
  vegan: { label: 'טבעוני', Icon: Leaf },
  glutenFree: { label: 'ללא גלוטן', Icon: WheatOff },
}

export default function Badge({ type, compact = false }) {
  const config = badgeConfig[type]
  if (!config) return null
  const { Icon, label } = config

  return (
    <span className={`badge badge--${type}${compact ? ' badge--compact' : ''}`}>
      <Icon size={compact ? 12 : 13} aria-hidden="true" />
      <span>{label}</span>
    </span>
  )
}
