import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { subjects, topics } from '../data.js'

export default function Teaching() {
  return (
    <>
      <PageHeader eyebrow="Teaching" title="Subjects & topics">
        Cambridge IGCSE and O Level Biology, taught with clear explanations, practical work and exam practice.
      </PageHeader>

      <Reveal as="section" className="wrap">
        <div className="cards">
          {subjects.map((s) => (
            <div key={s.level} className="card">
              <p className="mono small muted">{s.code}</p>
              <h3 className="serif-h3">{s.level}</h3>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Syllabus" title="Topics I cover" />
        <ul className="rows">
          {topics.map((t) => (
            <li key={t.name} className="row row-top">
              <span className="topic-emoji">{t.icon}</span>
              <span className="grow">
                {t.name}
                <span className="muted block small">{t.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <p className="intro">Need help with a specific topic?</p>
        <div className="btn-row">
          <Link to="/contact" className="btn btn-dark">Book tutoring</Link>
          <Link to="/resources" className="link-under">Browse resources</Link>
        </div>
      </Reveal>
    </>
  )
}
