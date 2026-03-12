import "../styles/components.css"

export function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    João Reis
                </div>
                <nav className="navbar__menu">
                    <a href="#home" className="nav-link">home</a>
                    <a href="#projects" className="nav-link">projects</a>
                    <a href="#blog" className="nav-link">blog</a>
                    <a href="#contact" className="nav-link">contact</a>
                </nav>
            </div>
        </header>
    )
}

