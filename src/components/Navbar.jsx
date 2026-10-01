import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, MessageCircle, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { waLink } from '../utils'
const LINKS = [['Home', '/'], ['Watches', '/watches'], ['Premium', '/watches?c=premium'], ['Collections', '/#collections'], ['About', '/#about']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const ic = 'p-2 text-green hover:opacity-60 transition'
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <nav aria-label="Main" className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[.3em] text-green">VANTIER</Link>
        <ul className="hidden gap-8 text-sm md:flex">
          {LINKS.map(([l, to]) => <li key={l}><NavLink to={to} end className="hover:text-green transition">{l}</NavLink></li>)}
        </ul>
        <div className="flex items-center">
          <Link to="/watches?search=1" aria-label="Search" className={ic}><Search size={19} /></Link>
          <Link to="/cart" aria-label={`Cart, ${count} items`} className={`${ic} relative`}>
            <ShoppingBag size={19} />
            {count > 0 && <span key={count} className="pop absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[10px] text-ivory">{count}</span>}
          </Link>
          <a href={waLink('Hello VANTIER, I have a question.')} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={ic}><MessageCircle size={19} /></a>
          <button className={`${ic} md:hidden`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>
      {open && <ul className="border-t border-line bg-ivory px-5 pb-4 md:hidden">
        {LINKS.map(([l, to]) => <li key={l}><Link to={to} onClick={() => setOpen(false)} className="block border-b border-line py-3">{l}</Link></li>)}
      </ul>}
    </header>)
}
