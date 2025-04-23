// destructure both href and children from props
export function Link({ href, children }) {
// return <a> with the fixed className and href={href}
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
