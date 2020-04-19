import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import usb from "../../content/assets/usb.svg"
const Header = (props) => {
    const [ scrolled, setScrolled ] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', navOnScroll)
      return () => {
        window.removeEventListener('scroll', navOnScroll)
      }
    }, [])

    const navOnScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
      return (
        <nav className={scrolled ? 'nav scroll' : 'nav'}>
          <div className="nav-container">
            <div className="brand">
              <Link to="/">
                <img src={usb} className="favicon" alt="usb" />
                <span className="text">Brooks Poltl</span>
              </Link>
            </div>
            <div className="links">
              {
              props.menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )
}

export default Header