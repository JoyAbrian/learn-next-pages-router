import ProductView from "../views/product";
import ProductType from "../../types/product.type";

const ProductPage = (props: {products: ProductType[]}) => {
    const { products } = props;

    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

// Dipanggil setiap melakukan request
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()

    return {
        props: {
            products: response.data,
        },
        // revalidate: 10,
        
    }
}