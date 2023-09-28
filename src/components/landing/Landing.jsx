import { memo } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link as LinkRouter } from "react-router-dom"
import landingImg from "../../assets/landing-img.webp"
import "./landing.css"

const Landing = memo(function Landing() {

    return (
        <main className="main container" >
            <div className="main__content">
                <h1 className="main__title">Moroccan Handmade Crafts</h1>
                <p className="main__description">If you&#39;re looking for exceptional Goods, Gifts
                    and Hand-crafted products direct from Moroccan artisans.
                    Then you&#39;ve come to the right place!
                </p>
                <LinkRouter className="main__link btn" to="/products">SHOP NOW<FaArrowRight /></LinkRouter>
            </div>
            <div className="main__image">
                <img className="main__img" src={landingImg} alt="landing page image" />
            </div>
        </main>
    )
})

export default Landing