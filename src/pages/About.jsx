import PageHeader from '../components/PageHeader.jsx'
import Experience from '../components/Experience.jsx'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { profile, philosophy, education, awards, achievements } from '../data.js'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Teacher, scientist, lifelong learner." />

      <Reveal as="section" className="wrap">
        {profile.bio.map((p, i) => <p key={i} className="intro">{p}</p>)}
        <div className="btn-row">
          <a href={profile.cvUrl} className="btn btn-dark">Download CV</a>
        </div>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Philosophy" title="How I teach" />
        <ol className="numbered">
          {philosophy.map((p, i) => (
            <li key={p.title}>
              <span className="mono small muted">0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <Experience />
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Education" title="Where I learned" />
        <ul className="rows">
          {education.map((e) => (
            <li key={e.title} className="row">
              <span>{e.title}<span className="muted block small">{e.place}</span></span>
              <span className="mono small muted">{e.period}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Results" title="Student achievements" />
        <div className="stats stats-3">
          {achievements.map((a) => (
            <div key={a.label}>
              <span className="stat-value">{a.value}</span>
              <span className="mono small muted">{a.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <SectionHead eyebrow="Recognition" title="Awards & development" />
        <ul className="rows">
          {awards.map((a) => <li key={a} className="row">{a}</li>)}
        </ul>
      </Reveal>
    </>
  )
}
