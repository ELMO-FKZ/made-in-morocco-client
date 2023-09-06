import { useParams } from "react-router-dom"
import ProductItem from "../../components/productItem/ProductItem"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import useFetch from "../../hooks/useFecth"
import "./shop.css"

const Category = () => {

    const {category} = useParams()
    const {products} = useFetch(`http://localhost:8000/api/products/category/${category}`) 

    return (
        <div className="shop container">
            <SpecialHeading title={category} />
            <div className="product-list" >
            {
                products?.map(product => <ProductItem key={product._id} product={product} isSelected="All"/>)
            }
            </div>
        </div>
    )
}

export default Category