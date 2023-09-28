import { useState, useEffect, memo } from "react"
import { Link as LinkRouter, NavLink } from "react-router-dom"
import logo from "../../assets/logo.webp"
import { FaBars, FaTimes } from "react-icons/fa"
import navLinks from "../../data/navLinks"
import useBodyOverflow from "../../hooks/useBodyOverflow"
import "./nav.css"

const Nav = memo(function Nav() {

    const [isShown, setIsShown] = useState(false)

    useBodyOverflow(isShown)

    function handleClick() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    function handleEnter(e) {
        if (e.keyCode === 13) {
            setIsShown(prevIsShown => !prevIsShown)
        }
    }

    useEffect(() => {
        function windowResize() {
            setIsShown(false)
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
                    <FaBars className={`nav__open ${isShown ? "nav__open--hide" : ""}`}/>
                    <FaTimes className={`nav__close ${!isShown ? "nav__close--hide" : ""}`}/>
                </div>
                <div className={`nav__overlay ${isShown ? "nav__overlay--show" : ""}`} onClick={handleClick}></div>
                <ul className={`nav__menu ${isShown ? "nav__menu--show" : ""}`}>
                    {
                        navLinks.map((navLink, index) => {
                            return (
                                <li className="nav__list" key={index}>
                                    <NavLink className={({isActive}) => (isActive ? "nav__link nav__link--active" : "nav__link")} to={navLink.path} onClick={()=>setIsShown(false)}>{navLink.name}</NavLink>
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