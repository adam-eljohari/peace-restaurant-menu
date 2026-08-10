import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import CategoryNav from './components/CategoryNav'
import DietaryLegend from './components/DietaryLegend'
import DishModal from './components/DishModal'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import SearchModal from './components/SearchModal'
import { menu } from './data/menu'
import { restaurant } from './data/restaurant'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(menu[0].id)
  const [selectedDish, setSelectedDish] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const visibleCategory = menu.find((category) => category.id === selectedCategory) ?? menu[0]

  useEffect(() => {
    document.documentElement.lang = restaurant.language
    document.documentElement.dir = restaurant.direction
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeDish = useCallback(() => setSelectedDish(null), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const selectCategory = (id) => {
    setSelectedCategory(id)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div id="top" className="app">
      <Header onSearch={() => setSearchOpen(true)} />
      <Hero />
      <main id="menu-start" className="menu page-shell">
        <header className="menu-intro">
          <span className="menu-intro__ornament" aria-hidden="true" />
          <p className="menu-intro__eyebrow">מהמטבח שלנו</p>
          <h2>התפריט</h2>
          <p className="menu-intro__description">כל מנה מוכנה במקום, מחומרי גלם טריים וביד אוהבת.</p>
        </header>
        <CategoryNav
          categories={menu}
          activeCategory={selectedCategory}
          onSelect={selectCategory}
        />
        <MenuSection key={visibleCategory.id} category={visibleCategory} onDishOpen={setSelectedDish} />
        <DietaryLegend />
      </main>
      <Footer />
      <FloatingActions />
      <button
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="חזרה לראש העמוד"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp size={20} />
      </button>
      <DishModal dish={selectedDish} onClose={closeDish} />
      <SearchModal isOpen={searchOpen} onClose={closeSearch} onDishOpen={setSelectedDish} />
    </div>
  )
}
