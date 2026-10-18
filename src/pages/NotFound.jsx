import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="This page has gone extinct.">
      <Link to="/" className="link-under">Back to home</Link>
    </PageHeader>
  )
}
