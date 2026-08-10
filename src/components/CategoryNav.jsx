import { CakeSlice, Flame, Salad } from 'lucide-react'
import { localize } from '../data/restaurant'

const categoryIcons = {
  starters: Salad,
  grill: Flame,
  desserts: CakeSlice,
}

export default function CategoryNav({ categories, activeCategory, onSelect }) {
  return (
    <section className="category-selector" aria-labelledby="category-selector-title">
      <div className="category-selector__heading">
        <span id="category-selector-title">בחרו קטגוריה</span>
        <small>מה בא לכם היום?</small>
      </div>
      <div className="category-scroll" role="tablist" aria-label="קטגוריות התפריט">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id] ?? Salad
          const isActive = activeCategory === category.id

          return (
            <button
              className={`category-chip${isActive ? ' is-active' : ''}`}
              type="button"
              role="tab"
              key={category.id}
              onClick={() => onSelect(category.id)}
              aria-selected={isActive}
              aria-controls={category.id}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>{localize(category.name)}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
