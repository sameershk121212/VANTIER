import { STORE_CONFIG } from '../config/store'
// Edit products here. Images: public/images/products/01.jpg (main) + optional 01-1.jpg, 01-2.jpg ... (gallery)
// [id, brand/model, variant, strap label, strap type (leather|metal|strap), price, black collection?]
const RAW = [
  ['01', 'Omega Speedmaster', 'Silver Dial', 'Silver Chain', 'metal', 1900, false],
  ['02', 'Omega Speedmaster', 'Green/White Dial', 'Gold Chain', 'metal', 1900, false],
  ['03', 'Tommy Hilfiger', 'Skeleton Automatic', 'Brown Leather Strap', 'leather', 2200, false],
  ['04', 'Fossil', 'Gold Round Skeleton Automatic', 'Brown Leather Strap', 'leather', 2200, false],
  ['05', 'Fossil', 'White/Black Bezel Skeleton', 'Black Strap', 'strap', 2200, true],
  ['06', 'Fossil', 'Full Black Skeleton', 'Black Metal Chain', 'metal', 2300, true],
  ['07', 'Tissot 1853', 'Black Skeleton', 'Black Strap', 'strap', 2300, true],
  ['08', 'Tissot 1853', 'Black/Gold Skeleton', 'Black Leather Strap', 'leather', 2400, true],
  ['09', 'Fossil', 'Full Black Chain Skeleton, Textured Bezel', 'Black Metal', 'metal', 2500, true],
  ['10', 'Fossil', 'All-Black Chain Skeleton, Sleek Matte Black', 'Black Metal', 'metal', 2500, true],
  ['11', 'Fossil', 'Brown Leather / Black Dial', 'Brown Leather', 'leather', 2200, false],
  ['12', 'Fossil', 'Black Dial / Black Strap', 'Black Strap', 'strap', 2300, true],
    ['13', 'Rolex Daytona Style', 'Black Dial Gold Sub-dials', 'Gold Stainless Steel Chain', 'metal', 1999, false],
  ['14', 'Patek Philippe Nautilus Style', 'Textured Black Open-Heart', 'Black Stainless Steel', 'metal', 1850, true],
  ['15', 'Rolex Cellini Style', 'White Textured Roman Dial', 'Brown Leather Strap', 'leather', 1800, false],
  ['16', 'Emporio Armani Chronograph', 'Royal Blue Chronograph', 'Silver Stainless Steel Chain', 'metal', 1850, false],
  ['17', 'Fossil Nate Style', 'Matte Black Chronograph', 'Matte Black Stainless Steel', 'metal', 1950, true],
  ['18', 'Rolex Datejust Style', 'Black Dial Two-Tone', 'Gold/Silver Jubilee', 'metal', 1899, false],
  ['19', 'Armitron / Armani Style', 'Matte Black Gold Hands', 'Black Metal Chain', 'metal', 1850, true],
  ['20', 'Rolex Submariner Style', 'Black Dial Gold Diver', 'Gold Stainless Steel Chain', 'metal', 1950, false],
  ['21', 'Emporio Armani Chronograph', 'Jet Black Chronograph', 'Silver Stainless Steel Chain', 'metal', 1850, false],
]
export const products = RAW.map(([id, name, variant, strap, strapType, price, black]) => ({
  id, name, variant, strap, strapType, price, black,
  automatic: true,
  premium: price > STORE_CONFIG.premiumThreshold, // automatic rule, no duplication
  image: `/images/products/${id}.jpg`,
  description: `${name} in a ${variant.toLowerCase()} design, paired with a ${strap.toLowerCase()}. An automatic timepiece.`,
}))
export const getProduct = (id) => products.find((p) => p.id === id)
export const COLLECTIONS = [
  ['all', 'All Watches', () => true], ['premium', 'Premium', (p) => p.premium],
  ['automatic', 'Automatic', (p) => p.automatic], ['leather', 'Leather Strap', (p) => p.strapType === 'leather'],
  ['metal', 'Metal Chain', (p) => p.strapType === 'metal'], ['black', 'Black Collection', (p) => p.black],
]
