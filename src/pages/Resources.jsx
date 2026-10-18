import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { Reveal } from '../components/ui.jsx'
import { resources } from '../data.js'

const levels = ['All', 'IGCSE', 'O Level']
const types = ['All', ...new Set(resources.map((r) => r.type))]

export default function Resources() {
  const [level, setLevel] = useState('All')
  const [type, setType] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter(
      (r) =>
        (level === 'All' || r.level === level) &&
        (type === 'All' || r.type === type) &&
        (!q || r.title.toLowerCase().includes(q) || r.topic.toLowerCase().includes(q))
    )
  }, [level, type, query])

  return (
    <>
      <PageHeader eyebrow="Resources" title="Notes, worksheets & lesson plans">
        Free materials for IGCSE and O Level Biology students.
      </PageHeader>

      <Reveal as="section" className="wrap">
        <input
          className="search"
          type="search"
          placeholder="Search topics…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search resources"
        />
        <div className="filter-row">
          <div className="toggle">
            {levels.map((l) => (
              <button key={l} className={level === l ? 'on' : ''} onClick={() => setLevel(l)}>{l}</button>
            ))}
          </div>
          <div className="toggle">
            {types.map((t) => (
              <button key={t} className={type === t ? 'on' : ''} onClick={() => setType(t)}>{t}</button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="muted empty">No resources match your filters.</p>
        ) : (
          <ul className="rows">
            {filtered.map((r) => (
              <li key={r.title} className="row row-top">
                <span className="grow">
                  {r.title}
                  <span className="muted block small">{r.topic} · {r.type}</span>
                </span>
                <span className="row-end">
                  <span className="mono small muted">{r.level.toLowerCase()}</span>
                  {r.url === '#' ? (
                    <span className="status status-soon">soon</span>
                  ) : (
                    <a href={r.url} className="status status-live" download>download</a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </>
  )
}
