import { Link } from 'react-router-dom'
import { profile, stats, topics, resources, testimonials, gallery, simulators } from '../data.js'
import { Reveal, RichText, SectionHead } from '../components/ui.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import Experience from '../components/Experience.jsx'

export default function Home() {
  return (
    <>
      <Reveal as="section" className="wrap hero">
        <div className="hero-head">
          <img className="avatar" src={profile.photo} alt={`Portrait of ${profile.name}`} />
          <h1 className="display">
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </h1>
        </div>
        {profile.intro.map((parts, i) => (
          <p key={i} className="intro"><RichText parts={parts} /></p>
        ))}
        <div className="btn-row">
          <Link to="/contact" className="btn btn-dark">Contact me</Link>
          <a href={profile.cvUrl} className="link-under">Download CV</a>
        </div>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="mono small muted">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <Experience />
      </Reveal>

      <Reveal as="section" className="wrap-wide section">
        <div className="wrap-inner">
          <SectionHead eyebrow="Simulators" title="Biology you can play with">
            <Link to="/simulators" className="link-under small">All {simulators.length} <ArrowIcon /></Link>
          </SectionHead>
        </div>
        <div className="sim-grid">
          {simulators.slice(0, 3).map((s) => (
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

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Syllabus" title="What I teach">
          <Link to="/teaching" className="link-under small">All topics <ArrowIcon /></Link>
        </SectionHead>
        <ul className="topic-grid">
          {topics.slice(0, 8).map((t) => (
            <li key={t.name}><span>{t.icon}</span>{t.name}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="For students" title="Free resources">
          <Link to="/resources" className="link-under small">View all <ArrowIcon /></Link>
        </SectionHead>
        <ul className="rows">
          {resources.slice(0, 5).map((r) => (
            <li key={r.title}>
              <Link to="/resources" className="row">
                <span>{r.title}</span>
                <span className="mono small muted">{r.level.toLowerCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Kind words" title="From students & parents" />
        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="mono small muted">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap-wide section">
        <div className="wrap-inner">
          <SectionHead eyebrow="Gallery" title="Inside the classroom">
            <Link to="/gallery" className="link-under small">See more <ArrowIcon /></Link>
          </SectionHead>
        </div>
        <div className="masonry">
          {gallery.slice(0, 6).map((g) => (
            <Link to="/gallery" key={g.src} className="masonry-item">
              <img src={g.src} alt={g.caption} loading="lazy" />
            </Link>
          ))}
        </div>
      </Reveal>
    </>
  )
}
