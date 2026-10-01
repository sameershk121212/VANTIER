import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Watches from './pages/Watches'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
export default function App() {
  const [splash, setSplash] = useState(true)
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0); else setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50) }, [pathname, hash])
  return (<>
    {splash && <Splash onDone={() => setSplash(false)} />}
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
    <Navbar />
    <main id="main" className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/watches" element={<Watches />} />
        <Route path="/watches/:id" element={<ProductDetail />} /><Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div className="wrap py-32 text-center"><h1 className="text-4xl">Page not found</h1><Link to="/" className="btn btn-solid mt-8">Back to home</Link></div>} />
      </Routes>
    </main>
    <Footer />
  </>)
}
