// export the Header component
export function Header ({ children }) {
    // must return a real <header> element that wraps its children
    return (
        <header className="header">
            {children}
        </header>
    )
}
