import { useFetch } from "../hooks/useFetch"
interface Product {
    userId: number,
    id: number,
    title: string,
    body: string
}
const ProductList = () => {
    const {data: products, loading, error} = useFetch<Product>('https://jsonplaceholder.typicode.com/posts');
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error {error.message}</div>
    }
    return (
        <div>
            <h1>
                Product List
            </h1>
            <ul>
                {products?.map(product => (
                    <li key={product.id}>
                        <strong> {product.title} </strong> 
                        {product.body};
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;