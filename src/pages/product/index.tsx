import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type ProductType = {
    id: number;
    name: string;
    price: number;
    stock: number;
};
const ProductPage = () => {
    const [ isLogin, setIsLogin ] = useState(false)
    const [ products, setProducts ] = useState([])
    const { push } = useRouter()

    // useEffect(() => {
    //     if (!isLogin) {
    //         push("/auth/login")
    //     }
    // }, [])

    useEffect(() => {
        fetch("/api/product")
            .then(res => res.json())
            .then((response) => setProducts(response.data))
    }, [])

    return (
        <div>
            <h1>Product Page</h1>   
            {products.map((product: ProductType) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    )
}

export default ProductPage;