import { Search, UtensilsCrossed, X } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { allMenuItems } from '../data/menu'
import { localize } from '../data/restaurant'
import { useDialog } from '../hooks/useDialog'

const normalize = (value) => value.trim().toLocaleLowerCase('he')
const searchableText = (dish) => [
  localize(dish.name),
  localize(dish.description),
  localize(dish.categoryName),
  ...Object.values(dish.name ?? {}),
  ...Object.values(dish.description ?? {}),
].join(' ').toLocaleLowerCase('he')

function SearchThumbnail({ dish }) {
  const [failed, setFailed] = useState(false)

  if (!dish.image || failed) {
    return <span className="search-result__placeholder"><UtensilsCrossed size={20} /></span>
  }

  return <img src={dish.image} alt="" loading="lazy" onError={() => setFailed(true)} />
}

export default function SearchModal({ isOpen, onClose, onDishOpen }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const closeButtonRef = useDialog(isOpen, onClose, inputRef)
  const matches = useMemo(() => {
    const normalizedQuery = normalize(query)
    if (!normalizedQuery) return []
    return allMenuItems.filter((dish) => dish.available && searchableText(dish).includes(normalizedQuery))
  }, [query])

  if (!isOpen) return null

  const selectDish = (dish) => {
    onClose()
    onDishOpen(dish)
    setQuery('')
  }

  return (
    <div className="search-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="search-modal" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <header className="search-modal__header">
          <div>
            <p>מצאו בדיוק מה שבא לכם</p>
            <h2 id="search-title">חיפוש בתפריט</h2>
          </div>
          <button ref={closeButtonRef} className="modal-close modal-close--inline" type="button" onClick={onClose} aria-label="סגירת החיפוש">
            <X size={21} />
          </button>
        </header>
        <label className="search-field">
          <Search size={20} aria-hidden="true" />
          <span className="visually-hidden">חיפוש לפי שם, תיאור או קטגוריה</span>
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="לדוגמה: חומוס, עוף, טבעוני..."
            type="search"
          />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="ניקוי החיפוש"><X size={17} /></button>}
        </label>

        <div className="search-results" aria-live="polite">
          {!query && (
            <div className="search-empty search-empty--initial">
              <span><Search size={26} /></span>
              <h3>מה תרצו לאכול?</h3>
              <p>אפשר לחפש לפי שם מנה, מרכיב או קטגוריה.</p>
            </div>
          )}
          {query && matches.length === 0 && (
            <div className="search-empty">
              <span><UtensilsCrossed size={26} /></span>
              <h3>לא מצאנו מנה כזאת</h3>
              <p>אפשר לנסות מילה אחרת או לעבור בין הקטגוריות.</p>
            </div>
          )}
          {matches.map((dish) => (
            <button className="search-result" type="button" key={dish.id} onClick={() => selectDish(dish)}>
              <SearchThumbnail dish={dish} />
              <span className="search-result__copy">
                <strong>{localize(dish.name)}</strong>
                <small>{localize(dish.categoryName)}</small>
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
