import { Flame, Leaf, WheatOff } from 'lucide-react'

export default function DietaryLegend() {
  return (
    <aside className="dietary-legend" aria-label="מקרא סימונים">
      <p>סימונים בתפריט</p>
      <div>
        <span><Leaf size={15} /> טבעוני / צמחוני</span>
        <span><Flame size={15} /> פיקנטי</span>
        <span><WheatOff size={15} /> ללא גלוטן</span>
      </div>
      <small>לרגישויות ואלרגיות יש להתייעץ עם הצוות.</small>
    </aside>
  )
}
