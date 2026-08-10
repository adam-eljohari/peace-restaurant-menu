import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import BrandMark from './BrandMark'
import { localize } from '../data/restaurant'

export default function DishVisual({ dish, large = false }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const hasImage = dish.image && !failed

  if (!hasImage) {
    return (
      <div className={`dish-visual dish-visual--empty${large ? ' dish-visual--large' : ''}`}>
        <span className="empty-plate"><UtensilsCrossed size={large ? 34 : 25} /></span>
        <BrandMark compact />
        <span className="visually-hidden">אין עדיין תמונה למנה</span>
      </div>
    )
  }

  return (
    <div className={`dish-visual${large ? ' dish-visual--large' : ''}${loaded ? ' is-loaded' : ''}`}>
      <span className="image-skeleton" aria-hidden="true" />
      <img
        src={dish.image}
        alt={localize(dish.name)}
        loading={large ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
