import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, COLLECTIONS } from '../data/products'
import ProductCard from '../components/ProductCard'
const PRICES = [['any', 'Any price', () => true], ['u2', 'Under ₹2,000', (p) => p.price < 2000], ['m', '₹2,000 – ₹2,400', (p) => p.price >= 2000 && p.price <= 2400], ['o', 'Above ₹2,400', (p) => p.price > 2400]]
const STRAPS = [['any', 'Any strap'], ['leather', 'Leather'], ['metal', 'Metal chain'], ['strap', 'Other strap']]
export default function Watches() {
  const [sp, setSp] = useSearchParams()
  const [q, setQ] = useState(''), [price, setPrice] = useState('any'), [strap, setStrap] = useState('any'), [auto, setAuto] = useState(false), [sort, setSort] = useState('none')
  const col = sp.get('c') || 'all'
  const ref = useRef()
  useEffect(() => { document.title = 'Watches — VANTIER'; if (sp.get('search')) ref.current?.focus() }, [])
  const list = useMemo(() => {
    const cf = COLLECTIONS.find((c) => c[0] === col)?.[2] || (() => true), pf = PRICES.find((x) => x[0] === price)[2]
    let r = products.filter((p) => cf(p) && pf(p) && (strap === 'any' || p.strapType === strap) && (!auto || p.automatic) &&
      `${p.name} ${p.variant} ${p.strap}`.toLowerCase().includes(q.trim().toLowerCase()))
    if (sort === 'asc') r = [...r].sort((a, b) => a.price - b.price)
    if (sort === 'desc') r = [...r].sort((a, b) => b.price - a.price)
    return r
  }, [q, price, strap, auto, sort, col])
  const sel = 'border border-line bg-white px-3 py-2 text-sm'
  return (
    <div className="wrap py-12">
      <h1 className="text-5xl">{col === 'premium' ? 'The Premium Collection' : 'Watches'}</h1>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Collections">
        {COLLECTIONS.map(([k, l]) => <button key={k} onClick={() => setSp(k === 'all' ? {} : { c: k })} aria-pressed={col === k}
          className={`border px-4 py-2 text-sm transition ${col === k ? 'border-green bg-green text-ivory' : 'border-line bg-white hover:border-green'}`}>{l}</button>)}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <input ref={ref} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search watches" aria-label="Search watches" className={`${sel} w-full sm:w-64`} />
        <select aria-label="Price" value={price} onChange={(e) => setPrice(e.target.value)} className={sel}>{PRICES.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
        <select aria-label="Strap" value={strap} onChange={(e) => setStrap(e.target.value)} className={sel}>{STRAPS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} className="accent-[#1B3A2D]" />Automatic</label>
        <select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value)} className={`${sel} sm:ml-auto`}>
          <option value="none">Sort: Featured</option><option value="asc">Price: Low to High</option><option value="desc">Price: High to Low</option></select>
      </div>
      <p className="mt-6 text-sm text-charcoal/60" aria-live="polite">{list.length} watches</p>
      {list.length ? <div className="mt-4 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        : <p className="py-20 text-center text-charcoal/70">No watches match these filters. Clear the search or change a filter.</p>}
    </div>)
}
