import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({ products, searchText, inStockOnly }) {
    function filterProducts(products) {
        let productsTypes = []
        let productsByType = []

        let nameLower, typeLower, searchLower

        for (const product of products) {
            if (inStockOnly && !product.inStock)
                continue
            if (!!searchText) {
                nameLower = product.name.toLowerCase()
                typeLower = product.type.toLowerCase()
                searchLower = searchText.toLowerCase()
                if (!(nameLower.includes(searchLower) || typeLower.includes(searchLower)))
                    continue
            }

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
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {/* This will cause a warning since it would be ideal for it to be a independent component */}
            {
                filterProducts(products).map(
                    (productsByType, index) => {
                        return (<>

                            <ProductCategoryRow key={index} type={productsByType.type} />
                            <tbody>
                                {
                                    productsByType.products.map((product, index) => (
                                        <ProductRow key={index} product={product} />)
                                    )
                                }
                            </tbody>

                        </>)
                    }

                )
            }
        </table>
    )
}