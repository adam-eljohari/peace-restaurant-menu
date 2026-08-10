import { ChevronLeft } from 'lucide-react'
import Badge from './Badge'
import DishVisual from './DishVisual'
import { localize } from '../data/restaurant'

export default function DishCard({ dish, onOpen, index = 0 }) {
  return (
    <article className="dish-card" style={{ '--stagger': `${Math.min(index, 5) * 55}ms` }}>
      <button className="dish-card__button" type="button" onClick={() => onOpen(dish)} aria-label={`פרטים על ${localize(dish.name)}`}>
        <DishVisual dish={dish} />
        <div className="dish-card__content">
          <div className="dish-card__topline">
            <h3>{localize(dish.name)}</h3>
          </div>
          <p>{localize(dish.description)}</p>
          <div className="dish-card__footer">
            <div className="dish-card__badges">
              {dish.tags?.slice(0, 2).map((tag) => <Badge key={tag} type={tag} compact />)}
            </div>
            <span className="dish-card__more">לפרטים <ChevronLeft size={15} /></span>
          </div>
        </div>
      </button>
    </article>
  )
}
