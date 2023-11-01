import { useState, useEffect, memo } from "react"
import { Link as LinkRouter, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../../assets/logo.webp"
import navLinks from "../../data/navLinks"
import useBodyOverflow from "../../hooks/useBodyOverflow"
import "./nav.css"

const Nav = memo(function Nav() {

    const [isMenuShown, setIsMenuShown] = useState(false)

    useBodyOverflow(isMenuShown)

    const handleClick = () => {
        setIsMenuShown(prevIsMenuShown => !prevIsMenuShown)
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            setIsMenuShown(prevIsMenuShown => !prevIsMenuShown)
        }
    }

    useEffect(() => {
        function windowResize() {
            setIsMenuShown(false)
        }
        window.addEventListener("resize", windowResize)
        return () => {
            window.removeEventListener("resize", windowResize)
        }
    }, [])

    return (
        <header className="header">
            <nav className="nav nav__container">
                <div className="nav__logo">
                    <LinkRouter to="/">
                        <img className="nav__logo-img" src={logo} alt="logo" />
                        <div className="nav__logo-texts">
                            <div className="nav__logo-text">Made In Morocco</div>
                            <div className="nav__logo-subtext">Authentic Handmade Crafts</div>
                        </div>
                    </LinkRouter>
                </div>
                <div className="nav__humberger" onClick={handleClick} onKeyDown={handleEnter} tabIndex={0}>
                    <FaBars className={`nav__open ${isMenuShown ? "nav__open--hide" : ""}`}/>
                    <FaTimes className={`nav__close ${!isMenuShown ? "nav__close--hide" : ""}`}/>
                </div>
                <div className={`nav__overlay ${isMenuShown ? "nav__overlay--show" : ""}`} onClick={handleClick}></div>
                <ul className={`nav__menu ${isMenuShown ? "nav__menu--show" : ""}`}>
                    {
                        navLinks.map((navLink) => {
                            return (
                                <li className="nav__list" key={navLink.id}>
                                    <NavLink className={({isActive}) => (isActive ? "nav__link nav__link--active" : "nav__link")} to={navLink.path} onClick={()=>setIsMenuShown(false)}>
                                        {navLink.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
})

export default Nav