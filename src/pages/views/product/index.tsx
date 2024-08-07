import ProductType from "@/types/product.type";
import Link from "next/link";
import { Fragment } from "react";

const ProductView = ({ products }: {products: ProductType[] }) => {
    return (
        <Fragment>
            <h1 className="text-4xl font-semibold text-center mt-5">Product List</h1>
            <div className="grid grid-cols-5 w-screen mx-3 my-5 gap-y-6 gap-x-4">
                {products.map((product: ProductType) => (
                    <Link href={`product/${product.id}`}>
                        <div className="w-full h-fit" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-gray-700" >{product.category}</p>
                            <p className="text-slate-600 mt-2 font-bold">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
}

export default ProductView;