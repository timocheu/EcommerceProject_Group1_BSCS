import React, { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: () => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((prev) => prev + 1);
  const resetCart = () => setCartCount(0);

  return (
    <CartContext.Provider value={{ cartCount, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
