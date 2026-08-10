import DishCard from './DishCard'
import { localize } from '../data/restaurant'

export default function MenuSection({ category, onDishOpen }) {
  return (
    <section className="menu-section" id={category.id} aria-labelledby={`${category.id}-title`}>
      <header className="section-heading">
        <span className="section-heading__line" />
        <div>
          <h2 id={`${category.id}-title`}>{localize(category.name)}</h2>
          <p>{localize(category.description)}</p>
        </div>
      </header>
      <div className="dish-grid">
        {category.items.filter((item) => item.available).map((dish, index) => (
          <DishCard key={dish.id} dish={dish} onOpen={onDishOpen} index={index} />
        ))}
      </div>
    </section>
  )
}
