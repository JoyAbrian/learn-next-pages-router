import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Shop Page</h1>
            <p>Product : {query.id && query.id[0]}</p>
        </div>
    )
}

export default ShopPage;