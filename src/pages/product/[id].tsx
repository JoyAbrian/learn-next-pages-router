import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../views/DetailProduct";
import ProductType from "@/types/product.type";

const DetailProductPage = ({ product } : { product:ProductType }) => {
    const { query } = useRouter();

    // Client Side Fetching
    // const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher);

    return (
        <div className="">
            <h1 className="text-5xl my-5 font-bold text-center">Detail Product</h1>
            {/* Client Side Fetching */}
            {/* <DetailProduct product={isLoading ? [] : data.data} /> */}

            {/* Server Side Fetching */}
            {/* <DetailProduct product={product} /> */}

            {/* Static Site Generation */}
            <DetailProduct product={product} />

        </div>
    )
}

export default DetailProductPage;

// Server Side Fetching
// export async function getServerSideProps({ params } : { params: { id: string }}) {
//     const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
//     const response = await res.json()

//     return {
//         props: {
//             product: response.data
//         }
//     }
// }

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/product/');
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: { id: product.id }
    }))

    return {
        paths,
        fallback: false
    }
}

// Static Site Generation
export async function getStaticProps({ params } : { params: { id: string }}) {
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
    const response = await res.json()

    return {
        props: {
            product: response.data
        }
    }
}