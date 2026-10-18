import { useState } from 'react'
import { experience } from '../data.js'
import { ChevronIcon } from './Icons.jsx'
import { SectionHead } from './ui.jsx'

const thisYear = new Date().getFullYear()
const period = (e) => `${e.start} to ${e.end ?? 'present'}`

function ListView() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="exp-list">
      {experience.map((e, i) => (
        <li key={e.role} className="exp-item">
          <button className="exp-row" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span className="exp-logo">🧬</span>
            <span className="exp-main">
              <span className="exp-place">{e.place}</span>
              <span className="muted">{e.role}</span>
            </span>
            <span className="mono small muted exp-period">{period(e)}</span>
            <ChevronIcon open={open === i} />
          </button>
          {open === i && <p className="exp-text muted">{e.text}</p>}
        </li>
      ))}
    </ul>
  )
}

function TimelineView() {
  const first = Math.min(...experience.map((e) => e.start))
  const span = thisYear + 1 - first
  const years = Array.from({ length: span }, (_, i) => first + i)
  const pct = (y) => ((y - first) / span) * 100

  return (
    <div className="tl">
      <div className="tl-grid">
        {years.map((y) => <span key={y} style={{ left: `${pct(y)}%` }} />)}
        <span className="tl-now" style={{ left: `${pct(thisYear + new Date().getMonth() / 12)}%` }}>now</span>
      </div>
      <div className="tl-rows">
        {[...experience].reverse().map((e) => {
          const end = e.end ?? thisYear + new Date().getMonth() / 12
          return (
            <div
              key={e.role}
              className="tl-bar"
              style={{ marginLeft: `${pct(e.start)}%`, width: `${pct(end) - pct(e.start)}%` }}
              title={`${e.role} · ${period(e)}`}
            >
              <span className="exp-place">{e.place}</span>
              <span className="muted small">{e.role}</span>
            </div>
          )
        })}
      </div>
      <div className="tl-years mono small muted">
        {years.map((y) => <span key={y} style={{ left: `${pct(y)}%` }}>{y}</span>)}
      </div>
    </div>
  )
}

export default function Experience() {
  const [view, setView] = useState('list')
  return (
    <>
      <SectionHead eyebrow="Experience" title="Where I have taught">
        <div className="toggle-wrap">
          <span className="hand">try this</span>
          <div className="toggle" role="group" aria-label="View">
            {['list', 'timeline'].map((v) => (
              <button key={v} className={view === v ? 'on' : ''} onClick={() => setView(v)}>{v}</button>
            ))}
          </div>
        </div>
      </SectionHead>
      {view === 'list' ? <ListView /> : <TimelineView />}
    </>
  )
}
