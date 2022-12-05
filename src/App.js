import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import { products } from './data/products';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App" >
      <h1>Products Table</h1>
        <SearchBar products={products} />
      <div className={"App Centered"} >
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default App;
