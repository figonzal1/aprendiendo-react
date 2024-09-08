import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cartProvider";

function App() {
  const { filterProducts } = useFilters();
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
    </CartProvider>
  );
}

export default App;
