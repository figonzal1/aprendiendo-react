import { createContext, useState } from "react";

export interface Product {
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
}

interface CartContextProps {
  cart: Product[];
  addCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addCart = (product: any) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);

      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
