import { useState } from "react";
import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";

const useFilters = () => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products: any) => {
    return products.filter((product: any) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters };
};

function App() {
  const { filterProducts, setFilters } = useFilters();
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  );
}

export default App;
