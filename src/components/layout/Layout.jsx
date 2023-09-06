import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"
import Control from "../control/Control"
import Footer from "../footer/Footer"

function Layout() {

    return (
        <>
        <Nav />
        <Outlet />
        <Control />
        <Footer />
        </>
    )
}

export default Layout