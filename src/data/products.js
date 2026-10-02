import { STORE_CONFIG } from '../config/store'
// Edit products here. Images: public/images/products/01.jpg (main) + optional 01-1.jpg, 01-2.jpg ... (gallery)
// [id, brand/model, variant, strap label, strap type (leather|metal|strap), price, black collection?]
const RAW = [
  ['01', 'Tommy Hilfiger', 'Skeleton Automatic', 'Brown Leather Strap', 'leather', 2200, true],
  ['02', 'Fossil', 'White/Black Bezel Skeleton', 'Black Strap', 'strap', 2200, true],
  ['03', 'Fossil', 'Gold Round Skeleton Automatic', 'Brown Leather Strap', 'leather', 2200, true],
  ['04', 'Fossil', 'Golden Silver Chain Skeleton, Textured Bezel', 'Golden Silver', 'metal', 2500, true],
  ['05', 'Fossil', 'Full Black Skeleton', 'Black Metal Chain', 'metal', 2300, true],
  ['06', 'Fossil', 'Full Black Skeleton', 'Black Metal Chain', 'metal', 2300, true],
  ['07', 'Fossil', 'White/Black Bezel Skeleton', 'Black Strap', 'strap', 2200, true],
  ['08', 'Fossil', 'Brown Leather / Black Dial', 'Brown Leather', 'leather', 2200, true],
  ['09', 'Fossil', 'Golden Silver Chain Skeleton, Textured Bezel', 'Golden Silver', 'metal', 2500, true],
  ['10', 'Fossil', 'Brown Leather / Black Dial', 'Brown Leather', 'leather', 2200, true],
  ['11', 'Tissot 1853', 'Black/Gold Skeleton', 'Black Leather Strap', 'leather', 2400, true],
  ['12', 'Fossil', 'Black Dial / Black Strap', 'Black Steel', 'metal', 2300, true],
  ['13', 'Emporio Armani Chronograph', 'Royal Blue Chronograph', 'Silver Stainless Steel Chain', 'metal', 1850, false],
  ['14', 'Emporio Armani Chronograph', 'Jet Black Chronograph', 'Silver Stainless Steel Chain', 'metal', 1850, false],
  ['15', 'Rolex Submariner Style', 'Black Dial Gold Diver', 'Stainless Steel Chain', 'metal', 1950, false],
  ['16', 'Rolex Daytona Style', 'Black Dial Gold Sub-dials', 'Gold Stainless Steel Chain', 'metal', 1999, false],
  ['17', 'Patek Philippe Nautilus Style', 'Textured Black Open-Heart', 'Black Stainless Steel', 'metal', 1850, false],
  ['18', 'Rolex Datejust Style', 'Black Dial Two-Tone', 'Gold/Silver Jubilee', 'metal', 1899, false],
  ['19', 'Omega Speedmaster', 'Black Dial', 'Black Chain', 'metal', 1900, false],
  ['20', 'Rolex Cellini Style', 'White Textured Roman Dial', 'Brown Leather Strap', 'leather', 1800, false],
  ['21', 'Rolex Cellini Style', 'White Textured Roman Dial', 'Brown Leather Strap', 'leather', 1800, false],
];
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
