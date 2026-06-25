// Metadatos por página (React 19 eleva <title>/<meta>/<link> al <head>).
// El title se reemplaza (React deduplica el título); description y canonical se
// gestionan SOLO aquí para evitar duplicados con index.html.
const SITE = 'https://eogtopografia.com'

export default function Seo({ title, description, path = '/' }) {
  const url = `${SITE}${path}`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </>
  )
}
