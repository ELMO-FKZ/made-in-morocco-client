import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const Home = lazy(() => import("./pages/home/Home"))
const Shop = lazy(() => import("./pages/shop/Shop"))
const Category = lazy(() => import("./pages/shop/Category"))
const Contact = lazy(() => import("./pages/contact/Contact"))
const About = lazy(() => import("./pages/about/About"))
const NotFound = lazy(() => import("./pages/notFound/NotFound"))
const Layout = lazy(() => import("./components/layout/Layout"))
const Privacy = lazy(() => import("./pages/privacy/Privacy"))
const Returns = lazy(() => import("./pages/returns/Returns"))
const ProductDetails = lazy(() => import("./pages/productDetails/ProductDetails"))
const Cart = lazy(() => import("./pages/cart/Cart"))
const Success = lazy(() => import("./pages/success/Success"))
const Cancel = lazy(() => import("./pages/cancel/Cancel"))


function App() {

  return (
    <Suspense fallback={<div className="loader-container"><div className="loader"></div></div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/:category/:id" element={<ProductDetails />} />
            <Route path="products" element={<Shop />} />
            <Route path="products/:category" element={<Category />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="shipping-returns" element={<Returns />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App