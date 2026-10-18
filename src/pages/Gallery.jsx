import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { Reveal } from '../components/ui.jsx'
import { gallery } from '../data.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Inside the classroom">
        Practicals, field trips and moments of discovery.
      </PageHeader>

      <Reveal as="section" className="wrap-wide">
        <div className="masonry">
          {gallery.map((g, i) => (
            <button key={g.src} className="masonry-item" onClick={() => setActive(i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span className="caption">{g.caption}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].caption} />
            <figcaption className="hand">{gallery[active].caption}</figcaption>
          </figure>
          <button className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>×</button>
        </div>
      )}
    </>
  )
}
