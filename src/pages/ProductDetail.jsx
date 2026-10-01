import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Check } from 'lucide-react'
import { getProduct } from '../data/products'
import { useCart } from '../context/CartContext'
import { money, waLink, productMessage } from '../utils'
import Img from '../components/Img'
// Gallery: main image (01.jpg) + any of 01-1.jpg ... 01-6.jpg that actually exist.
function useGallery(p) {
  const [imgs, setImgs] = useState([p.image])
  useEffect(() => {
    let live = true
    for (let i = 1; i <= 6; i++) {
      const src = `/images/products/${p.id}-${i}.jpg`, im = new Image()
      im.onload = () => live && setImgs((s) => (s.includes(src) ? s : [s[0], ...[...s.slice(1), src].sort()]))
      im.src = src
    }
    return () => { live = false }
  }, [p.id])
  return imgs
}
function Detail({ p }) {
  const imgs = useGallery(p), [i, setI] = useState(0), [qty, setQty] = useState(1), [added, setAdded] = useState(false), { add } = useCart()
  useEffect(() => { document.title = `${p.name} ${p.variant} — VANTIER`; document.querySelector('meta[name=description]')?.setAttribute('content', p.description) }, [p])
  const onAdd = () => { add(p.id, qty); setAdded(true); setTimeout(() => setAdded(false), 1600) }
  return (
    <div className="wrap grid gap-10 py-12 md:grid-cols-2">
      <div>
        <div className="aspect-square overflow-hidden border border-line bg-white"><Img key={imgs[i]} src={imgs[i] || p.image} alt={`${p.name} ${p.variant}`} className="fade-up h-full w-full object-cover" /></div>
        {imgs.length > 1 && <div className="mt-3 flex gap-2">{imgs.map((s, n) => <button key={s} onClick={() => setI(n)} aria-label={`Image ${n + 1}`} className={`h-20 w-20 overflow-hidden border ${n === i ? 'border-green' : 'border-line'}`}><Img src={s} alt="" className="h-full w-full object-cover" /></button>)}</div>}
      </div>
      <div>
        <Link to="/watches" className="text-sm text-charcoal/60 hover:text-green">← All watches</Link>
        <h1 className="mt-3 text-5xl">{p.name}</h1>
        <p className="mt-2 text-charcoal/70">{p.variant}</p>
        <p className="mt-5 text-3xl text-green">{money(p.price)}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {p.automatic && <span className="border border-green/40 px-2 py-1 text-green">Automatic</span>}
          {p.premium && <span className="bg-green px-2 py-1 text-ivory">Premium</span>}
        </div>
        <p className="mt-5 text-sm">Strap: <span className="text-charcoal/80">{p.strap}</span></p>
        <p className="mt-4 max-w-md leading-7 text-charcoal/80">{p.description}</p>
        {p.premium && <p className="mt-4 text-sm text-green">Premium Gift Box Included</p>}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex items-center border border-line bg-white" role="group" aria-label="Quantity">
            <button className="p-3" aria-label="Decrease" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={15} /></button>
            <span className="w-8 text-center" aria-live="polite">{qty}</span>
            <button className="p-3" aria-label="Increase" onClick={() => setQty(qty + 1)}><Plus size={15} /></button>
          </div>
          <button onClick={onAdd} className="btn btn-solid flex-1">{added ? <><Check size={16} />Added</> : 'Add to Cart'}</button>
        </div>
        <a href={waLink(productMessage(p, qty))} target="_blank" rel="noreferrer" className="btn btn-line mt-3 w-full">Order on WhatsApp</a>
      </div>
    </div>)
}
export default function ProductDetail() {
  const p = getProduct(useParams().id)
  if (!p) return <div className="wrap py-32 text-center"><h1 className="text-4xl">Watch not found</h1><Link to="/watches" className="btn btn-solid mt-8">Browse watches</Link></div>
  return <Detail key={p.id} p={p} />
}
