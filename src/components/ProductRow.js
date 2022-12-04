export default function ProductRow({product}) {
    const { name, price } = product

    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
        </tr>
    )
}