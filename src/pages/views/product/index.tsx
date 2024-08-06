import { Fragment } from "react";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const ProductView = ({ products }: {products: ProductType[] }) => {
    return (
        <Fragment>
            <h1 className="text-2xl font-semibold text-center mt-5">Product List</h1>
            <div className="flex mx-5 mt-5 gap-4">
                {products.map((product: ProductType) => (
                    <div className="w-1/5" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-700" >{product.category}</p>
                        <p className="text-slate-600 mt-2 font-bold">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default ProductView;