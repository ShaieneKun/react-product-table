import FilterableProductTable from "./components/FilterableProductTable";
import { products } from './data/products';

function App() {
  return (
    <>
      <FilterableProductTable products={products} />
    </>
  );
}

export default App;
