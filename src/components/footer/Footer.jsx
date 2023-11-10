import { memo } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa"
import "./footer.css"

const Footer = memo(function Footer() {

    const currentYear = new Date().getFullYear().toString()

    return (
        <section className="footer">
            <div className="footer__Inner container">
                <div className="footer__info" >
                    <h3 className="footer__title">Information</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/about">About us</LinkRouter>
                        </li>
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/contact">Contact us</LinkRouter>
                        </li>
                    </ul>
                </div>
                <div className="footer__costumer" >
                    <h3 className="footer__title">Customer service</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/privacy-policy">Privacy policy</LinkRouter>
                        </li>
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/shipping-returns">Shipping &amp; returns</LinkRouter>
                        </li>
                    </ul>
                </div>
                <div className="footer__follow">
                    <h3 className="footer__title">Follow us</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram account link">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Facebook account link" >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Pinterest account link">
                                <FaPinterestP />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; Copyright {currentYear}</p>
                Designed & built by <a className="footer__copyright-owner" href="https://elmo.onrender.com" target="_blank" rel="noopener noreferrer">EL MOKHTAR FKHARZ</a>
            </div>
        </section>
    )
})

export default Footer