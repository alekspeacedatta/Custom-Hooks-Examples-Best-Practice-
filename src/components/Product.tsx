import { useCounter } from "../hooks/useCounter"
const Product = ({id, title, body}: any) => {
    const { count, increment } = useCounter(0);
    return (
        <li key={id}>
            <strong>{title}</strong> {body}
            <button onClick={increment}>{count}</button>
        </li>
    )
}
export default Product;