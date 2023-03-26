import React from "react"
import { Link } from "gatsby"
import "./Header.scss"

const Header = ({ navbarOpen, setNavbarOpen }) => {
  const handleToggle = () => {
    if (navbarOpen === false) {
      setNavbarOpen(!navbarOpen)
    } else {
      setNavbarOpen(false)
    }
  }

  return (
    <header className={`header ${navbarOpen ? "active" : ""}`}>
      <div className="container">
        <div className="row flex-end">
          <button
            type="button"
            aria-label="Menu Button"
            className="nav-toggler"
            onClick={handleToggle}
          >
            <span></span>
          </button>
          <nav className={`nav ${navbarOpen ? "showMenu" : ""}`}>
            <div className="nav-inner">
              <ul>
                <li>
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="nav-item">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="nav-item">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-item">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
