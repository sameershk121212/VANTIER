# VANTIER — Time, Refined.
1. `npm install`
2. `npm run dev` (opens at http://localhost:5173)
3. **WhatsApp number:** `src/config/store.js` → `whatsappNumber` (digits with country code; currently `917378905993`). Used everywhere from this one file.
4. **Photos:** put files in `public/images/products/` named `01.jpg` … `12.jpg` (replace same names, no code changes). Extra gallery photos: `01-1.jpg`, `01-2.jpg` … (up to `-6`); they appear automatically on the product page. Until then, a branded placeholder is shown.
5. **Products/prices:** `src/data/products.js`. Premium (`price > 2000`) and the gift-box note are applied automatically.
