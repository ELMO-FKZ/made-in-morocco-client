import { useState } from "react"
import ProductItem from "../../components/productItem/ProductItem"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import subNavLinks from "../../data/subNavLinks"
import useFetch from "../../hooks/useFecth"
import "./shop.css"

const Shop = () => {

    const {products} = useFetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/products`) 
    const [isSelected, setIsSelected] = useState("All")

    const handleSelectChange = (e) => {
        setIsSelected(e.target.value)
    }

    return (
        <div className="shop container">
            <SpecialHeading title="Shop" />
            <div className="shop__filter">
                <label htmlFor="shop__filter-select">Sort by category: </label>
                <select className="shop__filter-select" id="shop__filter-select" value={isSelected} onChange={e => handleSelectChange(e)} >
                    {
                        subNavLinks.map(subNavLink => {
                            return (
                                <option key={subNavLink.id}>{subNavLink.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="product-list" >
            {
                products?.map((product) => <ProductItem key={product._id} product={product} isSelected={isSelected} />)
            }
            </div>
        </div>
    )
}

export default Shop