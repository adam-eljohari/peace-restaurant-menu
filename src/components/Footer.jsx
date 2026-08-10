import { Clock3, MapPin } from 'lucide-react'
import BrandMark from './BrandMark'
import { localize, restaurant } from '../data/restaurant'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner page-shell">
        <div className="footer__brand">
          <BrandMark />
          <div>
            <strong>{localize(restaurant.name)}</strong>
            <span>{localize(restaurant.ownerLine)}</span>
          </div>
        </div>
        <div className="footer__details">
          <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> {localize(restaurant.address)}</a>
          <span><Clock3 size={17} /> {localize(restaurant.openingHours.label)}</span>
        </div>
        <div className="footer__bottom">
          <span>סרקו · בחרו · בתיאבון</span>
          <small>{localize(restaurant.paymentNote)}</small>
        </div>
      </div>
    </footer>
  )
}
