import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { Reveal } from '../components/ui.jsx'
import { profile } from '../data.js'

const reasons = ['Tutoring enquiry', 'Job opportunity', 'Student question', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', reason: reasons[0], message: '' })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No server yet: opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.reason} — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let’s talk.">
        For tutoring, job opportunities or questions about Biology — I’d love to hear from you.
      </PageHeader>

      <Reveal as="section" className="wrap">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-2">
            <label>
              <span className="mono small muted">name</span>
              <input required value={form.name} onChange={update('name')} />
            </label>
            <label>
              <span className="mono small muted">email</span>
              <input type="email" required value={form.email} onChange={update('email')} />
            </label>
          </div>
          <label>
            <span className="mono small muted">reason</span>
            <select value={form.reason} onChange={update('reason')}>
              {reasons.map((r) => <option key={r}>{r}</option>)}
            </select>
          </label>
          <label>
            <span className="mono small muted">message</span>
            <textarea rows="6" required value={form.message} onChange={update('message')} />
          </label>
          <div className="btn-row">
            <button type="submit" className="btn btn-dark">Send message</button>
          </div>
        </form>
      </Reveal>

      <Reveal as="section" className="wrap section">
        <ul className="rows">
          <li className="row"><span className="mono small muted">email</span><a className="link-under" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li className="row"><span className="mono small muted">phone</span><a className="link-under" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
          <li className="row"><span className="mono small muted">linkedin</span><a className="link-under" href={profile.linkedin} target="_blank" rel="noreferrer">View profile</a></li>
          <li className="row"><span className="mono small muted">cv</span><a className="link-under" href={profile.cvUrl}>Download</a></li>
        </ul>
      </Reveal>
    </>
  )
}
