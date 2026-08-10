import { CircleAlert, X } from 'lucide-react'
import Badge from './Badge'
import DishVisual from './DishVisual'
import { localize } from '../data/restaurant'
import { useDialog } from '../hooks/useDialog'

const allergenNames = {
  sesame: 'שומשום',
  dairy: 'חלב',
  nuts: 'אגוזים',
  gluten: 'גלוטן',
}

export default function DishModal({ dish, onClose }) {
  const closeButtonRef = useDialog(Boolean(dish), onClose)
  if (!dish) return null

  return (
    <div className="modal-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="dish-modal" role="dialog" aria-modal="true" aria-labelledby="dish-modal-title">
        <div className="sheet-handle" aria-hidden="true" />
        <button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="סגירת פרטי המנה">
          <X size={21} />
        </button>
        <DishVisual dish={dish} large />
        <div className="dish-modal__content">
          <div className="dish-modal__title-row">
            <h2 id="dish-modal-title">{localize(dish.name)}</h2>
          </div>
          <div className="modal-badges">
            {dish.tags?.map((tag) => <Badge key={tag} type={tag} />)}
          </div>
          <p className="dish-modal__description">{localize(dish.description)}</p>
          {dish.ingredients?.length > 0 && (
            <div className="dish-meta-block">
              <h3>מה יש במנה</h3>
              <p>{dish.ingredients.join(' · ')}</p>
            </div>
          )}
          {dish.allergens?.length > 0 && (
            <div className="allergen-note">
              <CircleAlert size={18} />
              <p><strong>אלרגנים:</strong> {dish.allergens.map((item) => allergenNames[item] ?? item).join(', ')}</p>
            </div>
          )}
          <p className="kitchen-note">יש לכם רגישות או שאלה? נשמח לבדוק עם המטבח.</p>
        </div>
      </section>
    </div>
  )
}
