import { Link } from 'react-router-dom'
import { waLink } from '../utils'
export default function Footer() {
  const links = [['Home', '/'], ['Watches', '/watches'], ['Premium', '/watches?c=premium'], ['Collections', '/#collections'], ['About', '/#about'], ['Contact', '/#contact']]
  return (
    <footer id="contact" className="mt-24 bg-green text-ivory">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2">
        <div><p className="font-serif text-3xl tracking-[.3em]">VANTIER</p><p className="mt-2 text-sm tracking-widest text-ivory/70">TIME, REFINED.</p></div>
        <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          {links.map(([l, to]) => <li key={l}><Link to={to} className="hover:underline">{l}</Link></li>)}
          <li><a href={waLink('Hello VANTIER')} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
        </ul>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-3 border-t border-ivory/15 py-5 text-xs text-ivory/60">
        <span>© 2026 VANTIER</span><span className="flex gap-5"><Link to="/#contact">Privacy Policy</Link><Link to="/#contact">Terms</Link></span>
      </div>
    </footer>)
}
