// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CartContextType = {
  cartCount: number;
  setCartCount: (count: number) => void;
  updateCartCountFromStorage: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  // ✅ Load from localStorage initially
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      try {
        const items = JSON.parse(saved);
        setCartCount(items.length);
      } catch {
        setCartCount(0);
      }
    }
  }, []);

  // ✅ Function to manually refresh from storage
  const updateCartCountFromStorage = () => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      try {
        const items = JSON.parse(saved);
        setCartCount(items.length);
      } catch {
        setCartCount(0);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, updateCartCountFromStorage }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
