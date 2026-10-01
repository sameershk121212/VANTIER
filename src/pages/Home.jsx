import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Gem, Watch, Gift, MessageCircle } from 'lucide-react'
import { products, COLLECTIONS } from '../data/products'
import ProductCard from '../components/ProductCard'
import Img from '../components/Img'
export default function Home() {
  useEffect(() => { document.title = 'VANTIER — Time, Refined.' }, [])
  const featured = ['03', '06', '08', '01'].map((id) => products.find((p) => p.id === id))
  const why = [[Gem, 'Curated Timepieces'], [Watch, 'Automatic Collection'], [Gift, 'Premium Presentation'], [MessageCircle, 'Easy WhatsApp Ordering']]
  return (<>
    <section className="wrap grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
      <div className="fade-up">
        <h1 className="font-serif text-6xl tracking-[.18em] sm:text-7xl">VANTIER</h1>
        <p className="mt-3 text-lg tracking-[.3em] text-green">TIME, REFINED.</p>
        <p className="mt-6 max-w-md leading-relaxed text-charcoal/80">Discover carefully curated timepieces designed to make every moment count.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/watches" className="btn btn-solid">Explore Watches</Link>
          <Link to="/watches?c=premium" className="btn btn-line">Premium Collection</Link>
        </div>
      </div>
   <div className="fade-up aspect-square overflow-hidden border border-line bg-white">
  <video
    src="/videos/hero.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="h-full w-full object-cover"
  />
</div>

    </section>
    <section className="wrap py-16">
      <h2 className="text-4xl">Featured Timepieces</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featured.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </section>
    <section className="bg-green py-20 text-center text-ivory">
      <div className="wrap">
        <h2 className="text-4xl !text-ivory">THE PREMIUM COLLECTION</h2>
        <p className="mt-3 font-serif text-xl italic text-ivory/80">Presented with distinction.</p>
        <p className="mt-6 inline-block border border-ivory/40 px-4 py-2 text-sm">Premium Gift Box Included</p>
        <div><Link to="/watches?c=premium" className="btn mt-8 border-ivory text-ivory hover:bg-ivory hover:text-green">View Premium</Link></div>
      </div>
    </section>
    <section className="wrap py-20">
      <h2 className="text-4xl">Why VANTIER</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.map(([I, t]) => <li key={t} className="border border-line bg-white p-6"><I className="text-green" size={26} strokeWidth={1.4} /><p className="mt-4 font-serif text-xl">{t}</p></li>)}
      </ul>
    </section>
    <section id="collections" className="wrap scroll-mt-20 py-10">
      <h2 className="text-4xl">Collections</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map(([k, label, fn]) => <li key={k}><Link to={`/watches?c=${k}`} className="flex items-center justify-between border border-line bg-white p-6 transition hover:border-green"><span className="font-serif text-2xl text-green">{label}</span><span className="text-sm text-charcoal/60">{products.filter(fn).length} watches</span></Link></li>)}
      </ul>
    </section>
    <section id="about" className="wrap scroll-mt-20 py-20">
      <div className="max-w-2xl"><h2 className="text-4xl">About</h2>
        <p className="mt-5 leading-8 text-charcoal/80">VANTIER is a small, considered selection of watches, chosen for the way they look and feel on the wrist. We keep the range focused, present every order with care, and make buying simple: pick a watch, message us on WhatsApp, and we take it from there.</p></div>
    </section>
    <section className="wrap py-16 text-center"><h2 className="text-5xl">Find Your Timepiece.</h2><Link to="/watches" className="btn btn-solid mt-8">Explore Watches</Link></section>
  </>)
}
