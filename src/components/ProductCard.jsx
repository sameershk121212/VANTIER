import { Link } from 'react-router-dom'
import { money, waLink, productMessage } from '../utils'
import Img from './Img'
export default function ProductCard({ p }) {
  return (
    <article className="group flex flex-col border border-line bg-white transition duration-500 hover:shadow-[0_10px_30px_-15px_rgba(27,58,45,.35)]">
      <Link to={`/watches/${p.id}`} className="relative block aspect-square overflow-hidden bg-ivory">
        <Img src={p.image} alt={`${p.name} ${p.variant}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-col gap-1 text-[11px]">
          {p.premium && <span className="bg-green px-2 py-1 text-ivory">Premium</span>}
          {p.automatic && <span className="border border-green/40 bg-ivory px-2 py-1 text-green">Automatic</span>}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl">{p.name}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{p.variant}</p>
        <p className="mt-3 text-lg text-green">{money(p.price)}</p>
        {p.premium && <p className="mt-1 text-xs text-charcoal/60">Premium Gift Box Included</p>}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <Link to={`/watches/${p.id}`} className="btn btn-line !px-2">View Details</Link>
          <a href={waLink(productMessage(p))} target="_blank" rel="noreferrer" className="btn btn-solid !px-2">WhatsApp Order</a>
        </div>
      </div>
    </article>)
}
