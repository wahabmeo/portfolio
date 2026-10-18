import { useEffect, useRef, useState } from 'react'

// Fades its children in when scrolled into view.
export function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-shown' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

// Dotted-underlined word with a small note on hover / focus.
export function Tip({ children, tip }) {
  return (
    <span className="tip" tabIndex={0}>
      {children}
      <span className="tip-bubble" role="tooltip">{tip}</span>
    </span>
  )
}

// Renders text parts: plain strings, or { text, tip } objects.
export function RichText({ parts }) {
  return parts.map((p, i) =>
    typeof p === 'string' ? <span key={i}>{p}</span> : <Tip key={i} tip={p.tip}>{p.text}</Tip>
  )
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </div>
  )
}
