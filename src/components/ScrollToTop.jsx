import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resetea el scroll al inicio en cada cambio de ruta (salvo cuando hay ancla #).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
