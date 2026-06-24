import { WHATSAPP } from '../data/content.js'

// Botón flotante de WhatsApp, fijo abajo a la derecha en todas las páginas.
export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      {/* Etiqueta (solo desktop, aparece al pasar el mouse) */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-forest px-3.5 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        ¿Hablamos por WhatsApp?
      </span>

      {/* Botón */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 group-hover:scale-105">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
          className="relative h-8 w-8"
        >
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.712 6.403L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.587h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.72 12.72 0 0 0 16.003 3.2zm0 23.04h-.004a10.6 10.6 0 0 1-5.4-1.48l-.388-.23-4.003 1.05 1.07-3.9-.253-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.51 1.107 7.52 3.117a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.107-.5-.16-.71.16-.213.32-.82 1.04-1.006 1.253-.186.213-.37.24-.69.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.894-1.776-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.71-1.71-.973-2.343-.256-.614-.516-.53-.71-.54l-.605-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.256 3.443 5.466 4.827.764.33 1.36.527 1.824.674.766.244 1.464.21 2.016.127.615-.092 1.89-.773 2.156-1.52.266-.747.266-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </span>
    </a>
  )
}
