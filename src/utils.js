import { STORE_CONFIG } from './config/store'
export const money = (n) => `${STORE_CONFIG.currency}${n.toLocaleString('en-IN')}`
export const waLink = (text) => `https://wa.me/${String(STORE_CONFIG.whatsappNumber).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
export const productMessage = (p, qty = 1) =>
  `Hello VANTIER, I'd like to order:\n${p.name} — ${p.variant}\nPrice: ${money(p.price)}\nQuantity: ${qty}`
export const cartMessage = (lines, total) =>
  `Hello VANTIER, I'd like to order:\n\n${lines.map((l, i) => `${i + 1}. ${l.name} — ${l.variant}\n   ${money(l.price)} × ${l.qty} = ${money(l.price * l.qty)}`).join('\n')}\n\nTotal: ${money(total)}`
export const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#F1EDE2"/><circle cx="200" cy="200" r="96" fill="none" stroke="#1B3A2D" stroke-width="3"/><circle cx="200" cy="200" r="80" fill="none" stroke="#1B3A2D" stroke-opacity=".3"/><path d="M200 200V138M200 200l40 24" stroke="#1B3A2D" stroke-width="4" stroke-linecap="round"/><text x="200" y="350" text-anchor="middle" font-family="Georgia" font-size="20" letter-spacing="6" fill="#1B3A2D">VANTIER</text></svg>`)
