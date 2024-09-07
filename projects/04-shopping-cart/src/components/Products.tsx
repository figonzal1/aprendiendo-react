import { AddToCartIcon } from "./Icons";
import "./Products.css";

const Products = ({ products }: any) => {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product: any) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>

            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
