import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'
const Ctx = createContext()
export const useCart = () => useContext(Ctx)
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => { try { return JSON.parse(localStorage.getItem('vantier-cart')) || {} } catch { return {} } })
  useEffect(() => { try { localStorage.setItem('vantier-cart', JSON.stringify(items)) } catch {} }, [items])
  const add = (id, q = 1) => setItems((s) => ({ ...s, [id]: (s[id] || 0) + q }))
  const setQty = (id, q) => setItems((s) => { const n = { ...s }; if (q < 1) delete n[id]; else n[id] = q; return n })
  const remove = (id) => setQty(id, 0)
  const lines = useMemo(() => Object.entries(items).map(([id, qty]) => ({ ...getProduct(id), qty })).filter((l) => l.name), [items])
  const count = lines.reduce((a, l) => a + l.qty, 0)
  const total = lines.reduce((a, l) => a + l.qty * l.price, 0)
  return <Ctx.Provider value={{ lines, count, total, add, setQty, remove }}>{children}</Ctx.Provider>
}
