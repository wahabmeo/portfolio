import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Reveal } from '../components/ui.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import { simulators } from '../data.js'

const fileOf = (s) => `/simulators/${s.slug}.html`

function SimulatorList() {
  const topics = useMemo(() => ['All', ...new Set(simulators.map((s) => s.topic))], [])
  const [topic, setTopic] = useState('All')
  const shown = simulators.filter((s) => topic === 'All' || s.topic === topic)

  return (
    <>
      <PageHeader eyebrow="Simulators" title="Biology you can play with">
        Interactive labs I built for my classes. Change one thing, watch what happens, explain why.
      </PageHeader>

      <Reveal as="section" className="wrap-wide">
        <div className="wrap-inner">
          <div className="toggle sim-filter">
            {topics.map((t) => (
              <button key={t} className={topic === t ? 'on' : ''} onClick={() => setTopic(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="sim-grid">
          {shown.map((s) => (
            <Link key={s.slug} to={`/simulators/${s.slug}`} className="sim-card">
              <span className="sim-icon">{s.icon}</span>
              <span className="mono small muted">{s.topic.toLowerCase()}</span>
              <h3 className="serif-h3">{s.title}</h3>
              <p className="muted small">{s.text}</p>
              <span className="sim-open">Open <ArrowIcon /></span>
            </Link>
          ))}
        </div>
      </Reveal>
    </>
  )
}

function SimulatorView({ sim }) {
  return (
    <section className="sim-view">
      <div className="wrap-wide sim-bar">
        <Link to="/simulators" className="link-under small">← All simulators</Link>
        <span className="mono small muted">{sim.topic.toLowerCase()}</span>
        <a href={fileOf(sim)} target="_blank" rel="noreferrer" className="link-under small">
          Full screen <ArrowIcon />
        </a>
      </div>
      <div className="sim-frame-wrap">
        <iframe className="sim-frame" src={fileOf(sim)} title={sim.title} loading="lazy" />
      </div>
    </section>
  )
}

export default function Simulators() {
  const { slug } = useParams()
  const sim = slug && simulators.find((s) => s.slug === slug)
  if (slug && !sim) {
    return (
      <PageHeader eyebrow="404" title="Simulator not found.">
        <Link to="/simulators" className="link-under">See all simulators</Link>
      </PageHeader>
    )
  }
  return sim ? <SimulatorView sim={sim} /> : <SimulatorList />
}
