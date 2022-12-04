import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({ products }) {
    function filterProducts(products) {
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

    function createProductSection({ products, type }) {
        return (<>
            <ProductCategoryRow type={type} />
            <tbody>
                {products.map((product, index) =>
                    <ProductRow key={index} product={product} />)}
            </tbody>
        </>)
    }

    function createProductSections() {
        const productsByType = filterProducts(products)
        return (<>
            {
                productsByType.map(element => createProductSection(
                    element
                ))
            }
        </>)
    }

    const productSections = createProductSections()

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {productSections}
        </table>
    )
}