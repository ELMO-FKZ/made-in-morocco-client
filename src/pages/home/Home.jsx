import Landing from "../../components/landing/Landing"
import Services from "../../components/services/Services"
import Collections from "../../components/collections/Collections"
import Faqs from "../../components/faqs/Faqs"
import Testimonials from "../../components/testimonials/Testimonials"
import Newsletter from "../../components/newsletter/Newsletter"

function Home() {

    return (
        <>
        <Landing />
        <Services />
        <Collections />
        <Faqs />
        <Testimonials />
        <Newsletter />
        </>
    )
}

export default Home