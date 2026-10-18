import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data.js'
import {
  HomeIcon, LeafIcon, FlaskIcon, BookIcon, ImageIcon, UserIcon, MailIcon,
  ClockIcon, GlobeIcon, SunIcon, MoonIcon,
} from './Icons.jsx'

const links = [
  { to: '/', label: 'Home', icon: <HomeIcon />, end: true },
  { to: '/teaching', label: 'Teaching', icon: <LeafIcon /> },
  { to: '/simulators', label: 'Simulators', icon: <FlaskIcon /> },
  { to: '/resources', label: 'Resources', icon: <BookIcon /> },
  { to: '/gallery', label: 'Gallery', icon: <ImageIcon /> },
  { to: '/about', label: 'About', icon: <UserIcon /> },
  { to: '/contact', label: 'Contact', icon: <MailIcon /> },
]

function useClock() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-US', {
      weekday: 'short', hour: 'numeric', minute: '2-digit', timeZone: profile.timeZone,
    }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000)
    return () => clearInterval(id)
  }, [])
  return time
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const set = document.documentElement.dataset.theme
    if (set) return set
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch (e) {}
    setTheme(next)
  }
  return [theme, toggle]
}

export default function Layout() {
  const { pathname } = useLocation()
  const time = useClock()
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-item"><ClockIcon /> {time}</span>
          <div className="topbar-right">
            <span className="topbar-item"><GlobeIcon /> {profile.location}</span>
            <span className="topbar-sep" />
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer wrap">
        <p className="footer-lead">You can usually find me</p>
        <p className="muted">in the lab, in the classroom, or marking papers — usually all three.</p>
        <p className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <p className="mono small muted">© {new Date().getFullYear()} {profile.name}</p>
      </footer>

      <nav className="dock" aria-label="Main">
        <img className="dock-avatar" src={profile.photo} alt="" />
        <span className="dock-sep" />
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className="dock-link" aria-label={l.label}>
            {l.icon}
            <span className="dock-label">{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
