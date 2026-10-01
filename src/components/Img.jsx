import { PLACEHOLDER } from '../utils'
export default function Img({ src, alt, className = '', ...r }) {
  return <img src={src} alt={alt} className={className} {...r}
    onError={(e) => { if (e.currentTarget.src !== PLACEHOLDER) e.currentTarget.src = PLACEHOLDER }} />
}
