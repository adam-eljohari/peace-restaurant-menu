import { Search } from 'lucide-react'
import BrandMark from './BrandMark'
import { localize, restaurant } from '../data/restaurant'

export default function Header({ onSearch }) {
  return (
    <header className="site-header">
      <a className="header-brand" href="#top" aria-label={`${localize(restaurant.name)} — חזרה לראש העמוד`}>
        <BrandMark compact />
        <span>
          <strong>{localize(restaurant.name)}</strong>
          <small>{localize(restaurant.ownerLine)}</small>
        </span>
      </a>
      <nav className="header-actions" aria-label="פעולות מהירות">
        <button className="icon-button icon-button--dark" type="button" onClick={onSearch} aria-label="חיפוש בתפריט">
          <Search size={20} />
        </button>
      </nav>
    </header>
  )
}
