// a wrapper around <img> that applies a default CSS class
export function Image({ src, alt, className = "round-image" }) {
  return <img className={className} src={src} alt={alt}></img>;
}
