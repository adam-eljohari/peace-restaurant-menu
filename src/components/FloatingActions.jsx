import { MapPin } from 'lucide-react'
import { restaurant } from '../data/restaurant'

export default function FloatingActions() {
  return (
    <nav className="floating-actions" aria-label="ניווט למסעדה">
      <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer">
        <MapPin size={18} />
        <span>ניווט</span>
      </a>
    </nav>
  )
}
