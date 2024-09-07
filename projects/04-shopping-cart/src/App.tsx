import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();
  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
    </>
  );
}

export default App;
