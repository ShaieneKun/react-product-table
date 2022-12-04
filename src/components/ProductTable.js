export default function ProductTable({products}) {
    function filterProducts() {
        let productsTypes = []
        let productsByType = []

        for (const product of products) {
            if (productsTypes.includes(product.type)) {
                const productsSameType = productsByType.find(element => element.type === product.type)
                productsSameType.products.push(product)
            }
            else {
                productsTypes.push(product.type)
                productsByType.push({
                    type: product.type,
                    products: [
                        product
                    ]
                })
            }
        }

        return productsByType
    }

    return (
        <table>
            <theader>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </theader>


        </table>
    )
}