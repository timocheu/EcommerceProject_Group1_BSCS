import { useEffect, useState, useMemo } from "react";
import { OrderItem, CheckoutSummary } from "@/types";

// ---- Hook ----
export function useCart() {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  // --- Load from localStorage on mount ---
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to load cart from localStorage:", err);
    }
  }, []);

  // --- Persist to localStorage whenever cart changes ---
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Failed to save cart to localStorage:", err);
    }
  }, [cartItems]);

  // --- Add item or increase quantity ---
  const addItem = (newItem: OrderItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  // --- Remove item ---
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Update quantity with bounds + remove if 0 ---
  const updateQuantity = (id: string, newQty: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, newQty) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // --- Clear cart ---
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // --- Computed totals ---
  const summary: CheckoutSummary = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.12; // 12% VAT
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [cartItems]);

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    ...summary,
  };
}

// Usage
// import { useCart } from "@/hooks/useCart";
//
// export default function CartPage() {
//   const { cartItems, updateQuantity, removeItem, subtotal, total } = useCart();
//
//   return (
//     <div>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} width={50} />
//           <p>{item.name}</p>
//           <p>₱{item.price}</p>
//           <input
//             type="number"
//             value={item.quantity}
//             min={1}
//             onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
//           />
//           <button onClick={() => removeItem(item.id)}>Remove</button>
//         </div>
//       ))}
//       <hr />
//       <p>Subtotal: ₱{subtotal.toFixed(2)}</p>
//       <p>Total: ₱{total.toFixed(2)}</p>
//     </div>
//   );
// }
