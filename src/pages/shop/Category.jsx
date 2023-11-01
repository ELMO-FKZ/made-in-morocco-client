import { useState } from "react"
import { useParams } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa"
import { newPrice } from "../../utils/newPrice"
import ProductItem from "../../components/productItem/ProductItem"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import useFetch from "../../hooks/useFecth"
import sortPriceItems from "../../data/sortPriceItems"
import "./shop.css"

function Category() {

    const {category} = useParams()
    const {products} = useFetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/products/category/${category}`) 
    const [sortPrice, setSortPrice] = useState("Default")
    const [extend, setExtend] = useState(false)

    const handleSortChange = (e) => {
        setSortPrice(e.target.value)
        setExtend(false)
    }

    const sortPriceHandler = () => {
        setExtend(prevExtend => !prevExtend)
    }

    return (
        <div className="shop container">
            <SpecialHeading title={category} />
            <div className="shop__filter">
                <div className="shop__dropdown">
                    <button className={`shop__dropdown-btn ${extend ? "shop_dropdown--extended" : ""}`} type="button" onClick={() => sortPriceHandler()} >
                        <span>Sort by price</span>
                        <FaChevronDown />
                    </button>
                    {
                        extend &&
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
            <div className="product-list" >
            {
                products
                ?.filter((product) => product.category == category )
                .sort((a, b) => { 
                    if (sortPrice === "Low to high") {
                        return newPrice(a) - newPrice(b);
                    } else if (sortPrice === "High to low") {
                        return newPrice(b) - newPrice(a);
                    } else {
                        return 0;
                    }})
                .map(product => <ProductItem key={product._id} product={product} />)
            }
            </div>
        </div>
    )
}

export default Category