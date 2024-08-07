import ProductType from "@/types/product.type"

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <div className="w-full h-fit" key={product.id}>
            <img src={product.image && product.image} alt={product.name && product.name} />
            <h3 className="font-semibold">{product.name && product.name}</h3>
            <p className="text-gray-700" >{product.category && product.name}</p>
            <p className="text-slate-600 mt-2 font-bold">{product.price && product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
    )
}

export default DetailProduct;