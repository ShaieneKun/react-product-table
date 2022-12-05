import { useState } from 'react'
import '../App.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable({ products }) {
    const [searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="app" >
            <h1>Products Table</h1>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
            />
            <div className="app centered" >
                <ProductTable
                    products={products}
                    searchText={searchText}
                    inStockOnly={inStockOnly}
                />
            </div>
        </div>
    )
}