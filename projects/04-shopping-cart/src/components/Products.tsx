import useCart from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Products.css";

const Products = ({ products }: any) => {
  const { addCart, cart, removeFromCart } = useCart();
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product: any) => {
          const isProductInCart = cart.some((item) => item.id === product.id);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button
                  onClick={() =>
                    isProductInCart ? removeFromCart(product) : addCart(product)
                  }
                >
                  {!isProductInCart ? (
                    <AddToCartIcon />
                  ) : (
                    <RemoveFromCartIcon />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
