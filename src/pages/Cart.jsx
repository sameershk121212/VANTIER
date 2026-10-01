import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { money, waLink, cartMessage } from '../utils'
import Img from '../components/Img'
export default function Cart() {
  const { lines, total, setQty, remove } = useCart()
  useEffect(() => { document.title = 'Your Cart — VANTIER' }, [])
  if (!lines.length) return <div className="wrap py-32 text-center"><h1 className="text-4xl">Your cart is empty</h1><p className="mt-3 text-charcoal/70">Add a watch to get started.</p><Link to="/watches" className="btn btn-solid mt-8">Explore Watches</Link></div>
  return (
    <div className="wrap py-12">
      <h1 className="text-5xl">Your Cart</h1>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {lines.map((l) => (
          <li key={l.id} className="flex flex-wrap items-center gap-4 py-5">
            <Img src={l.image} alt={l.name} className="h-24 w-24 border border-line object-cover" />
            <div className="min-w-40 flex-1"><Link to={`/watches/${l.id}`} className="font-serif text-xl text-green">{l.name}</Link><p className="text-sm text-charcoal/70">{l.variant}</p><p className="text-sm">{money(l.price)}</p></div>
            <div className="flex items-center border border-line bg-white">
              <button className="p-2.5" aria-label="Decrease" onClick={() => setQty(l.id, l.qty - 1)}><Minus size={14} /></button>
              <span className="w-8 text-center">{l.qty}</span>
              <button className="p-2.5" aria-label="Increase" onClick={() => setQty(l.id, l.qty + 1)}><Plus size={14} /></button>
            </div>
            <p className="w-24 text-right">{money(l.price * l.qty)}</p>
            <button onClick={() => remove(l.id)} aria-label={`Remove ${l.name}`} className="p-2 text-charcoal/60 hover:text-green"><Trash2 size={17} /></button>
          </li>))}
      </ul>
      <div className="mt-8 flex flex-col items-end gap-4">
        <p className="text-2xl">Total <span className="ml-3 font-serif text-3xl text-green">{money(total)}</span></p>
        <a href={waLink(cartMessage(lines, total))} target="_blank" rel="noreferrer" className="btn btn-solid w-full sm:w-auto">Checkout on WhatsApp</a>
      </div>
    </div>)
}
