import { Clock3, MapPin } from 'lucide-react'
import BrandMark from './BrandMark'
import { getOpenStatus, localize, restaurant } from '../data/restaurant'

export default function Hero() {
  const status = getOpenStatus()

  return (
    <section className="hero" aria-labelledby="restaurant-name">
      <img className="hero__image" src="/images/brand/peace-table-hero.jpg" alt="מבחר מנות מהמטבח המקומי" fetchPriority="high" />
      <div className="hero__veil" />
      <div className="hero__content page-shell">
        <div className="hero__identity">
          <BrandMark />
          <div>
            <p className="hero__eyebrow">{localize(restaurant.eyebrow)}</p>
            <h1 id="restaurant-name">{localize(restaurant.name)}</h1>
            <p className="hero__owner">{localize(restaurant.ownerLine)}</p>
          </div>
        </div>
        <p className="hero__description">{localize(restaurant.description)}</p>
        <div className="hero__meta">
          <span className={status.isOpen ? 'status-dot status-dot--open' : 'status-dot'} />
          <span>{status.label}</span>
          <span className="hero__divider" />
          <MapPin size={15} />
          <span>לוד</span>
        </div>
        <div className="hero__hours">
          <Clock3 size={16} />
          <span>{localize(restaurant.openingHours.label)}</span>
        </div>
      </div>
    </section>
  )
}
