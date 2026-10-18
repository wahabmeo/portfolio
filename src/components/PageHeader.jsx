import { Reveal } from './ui.jsx'

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <Reveal as="section" className="wrap page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="display">{title}</h1>
      {children && <p className="lead">{children}</p>}
    </Reveal>
  )
}
