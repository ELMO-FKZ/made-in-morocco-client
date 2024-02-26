import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { newPrice } from "../../utils/newPrice"
import ProductItem from "../../components/productItem/ProductItem"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import subNavLinks from "../../data/subNavLinks"
import useFetch from "../../hooks/useFecth"
import sortPriceItems from "../../data/sortPriceItems";
import "./shop.css"

function Shop() {

    const {products, loading} = useFetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/products`) 
    const [sortCategory, setSortCategory] = useState("All")
    const [sortPrice, setSortPrice] = useState("Default")
    const [extend, setExtend] = useState({category: false, price: false})

    const handleSortChange = (e) => {
        const name = e.target.name
        if (name == "category") {
            setSortCategory(e.target.value)
        } else if (name == "price") {
            setSortPrice(e.target.value)
        }
        setExtend({category: false, price: false})
    }

    const sortCategoryHandler = () => {
        setExtend(prevExtend => ({category: !prevExtend.category, price: false}))
    }

    const sortPriceHandler = () => {
        setExtend(prevExtend => ({category: false, price: !prevExtend.price}))
    }

    return (
        <div className="shop container">
            <SpecialHeading title="Shop" />
            <div className="shop__filter">
                <div className="shop__dropdown">
                    <button className={`shop__dropdown-btn ${extend.category ? "shop_dropdown--extended" : ""}`} type="button" onClick={() => sortCategoryHandler()} >
                        <span>Sort by category</span>
                        <FaChevronDown />
                    </button>
                    {
                        extend.category &&
                        <ul className="shop__dropdown-menu">
                            {subNavLinks.map((subNavLink) => (
                                <li key={subNavLink.id} className="shop__dropdown-menu-item">
                                    <input
                                        type="radio"
                                        id={subNavLink.name}
                                        name="category"
                                        value={subNavLink.name}
                                        checked={sortCategory === subNavLink.name}
                                        onChange={(e) => handleSortChange(e)} />
                                    <label className="shop__dropdown-menu-label" htmlFor={subNavLink.name}>{subNavLink.name}</label>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="shop__dropdown">
                    <button className={`shop__dropdown-btn ${extend.price ? "shop_dropdown--extended" : ""}`} type="button" onClick={() => sortPriceHandler()} >
                        <span>Sort by price</span>
                        <FaChevronDown />
                    </button>
                    {
                        extend.price &&
                        <ul className="shop__dropdown-menu">
                            {sortPriceItems.map((sortPriceItem) => (
                                <li key={sortPriceItem.id} className="shop__dropdown-menu-item" >
                                    <input
                                        type="radio"
                                        id={sortPriceItem.name}
                                        name="price"
                                        value={sortPriceItem.name}
                                        checked={sortPrice === sortPriceItem.name}
                                        onChange={(e) => handleSortChange(e)} />
                                    <label className="shop__dropdown-menu-label" htmlFor={sortPriceItem.name}>{sortPriceItem.name}</label>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            <>
            { loading ?
            <div className="product-loading">
                <div></div><div></div><div></div><div></div>
            </div>
            :
            <div className="product-list" >
                {
                    products
                    ?.filter((product) => sortCategory === "All" || sortCategory === product.category)
                    .sort((a, b) => { 
                        if (sortPrice === "Low to high") {
                            return newPrice(a) - newPrice(b);
                        } else if (sortPrice === "High to low") {
                            return newPrice(b) - newPrice(a);
                        } else {
                            return 0;
                        }})
                    .map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))
                }
            </div>
            }
            </>
        </div>
    )
}

export default Shop