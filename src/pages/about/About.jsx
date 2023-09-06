import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import "./about.css"

const About = () => {

    return (
        <div className="about container">
            <SpecialHeading title="About us" />
            <p className="about__para">At <span className="about__exp">Made In Morocco</span> , we specialize in bringing the beauty of Moroccan handmade items to your doorstep. We have a passion for the rich history and culture of Morocco, and we believe that each piece we offer tells a unique story.</p>
            <p className="about__para">Our journey began with a love for travel and a deep appreciation for the artistry of Moroccan craftsmanship. We were struck by the intricate details and stunning colors found in each handmade item, and we knew we had to share these treasures with the world.</p>
            <p className="about__para">We work directly with local artisans and small cooperatives to ensure that every piece is handmade with the highest quality materials and techniques. By supporting these artisans, we not only bring authentic Moroccan items to our customers, but we also help to sustain traditional crafts and support the local economy.</p>
            <p className="about__para">We are passionate about providing excellent customer service and making your shopping experience as enjoyable as possible. If you have any questions or feedback, please don&#39;t hesitate to contact us. We are always here to help.</p>
            <p className="about__para">Thank you for visiting <span className="about__exp">Made In Morocco</span> and for supporting Moroccan craftsmanship. We hope our items bring a touch of Morocco&#39;s beauty and culture into your home.</p>
        </div>
    )
}

export default About