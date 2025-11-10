import './styles/content.css'
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Counter } from '@/components/ui/shadcn-io/counter';
import { useHandleNavigate } from '@/components/HandleNavigate';
import { useCart } from "@/context/CartContext"; 
import CartBuyNow from '@/components/shadcn-studio/button/cartbuynowbutton';
import ContinueShoppingButton from '@/components/shadcn-studio/button/continueshoppingbutton';
import { HuaweiLaptop, InfinixLaptop, RazerLaptop } from "@/data/Products";
import type { OrderItem } from "@/types";

export function CartPage() {
  const navigate = useHandleNavigate();
  const { state } = useLocation();
  const { setCartCount } = useCart();
  const processedAddedAtRef = useRef<number | null>(null);

  const [cartItems, setCartItems] = useState<OrderItem[]>(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        localStorage.removeItem('cartItems');
      }
    }
    return [
      {
        id: `${HuaweiLaptop.product1.laptopid}-default`,
        name: HuaweiLaptop.product1.laptopname,
        price: HuaweiLaptop.product1.price,
        image: HuaweiLaptop.product1.imgs[0],
        quantity: 1,
      },
      {
        id: `${InfinixLaptop.product1.laptopid}-default`,
        name: InfinixLaptop.product1.laptopname,
        price: InfinixLaptop.product1.price,
        image: InfinixLaptop.product1.imgs[0],
        quantity: 1,
      },
      {
        id: `${RazerLaptop.product1.laptopid}-default`,
        name: RazerLaptop.product1.laptopname,
        price: RazerLaptop.product1.price,
        image: RazerLaptop.product1.imgs[0],
        quantity: 1,
      },
    ];
  });

  //  Update localStorage & cartCount whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length); // <-- update global count
  }, [cartItems, setCartCount]);

  //  Add or update product when navigating from ProductPage
  useEffect(() => {
    const cartItem = state?.cartItem;
    const addedAt = state?.addedAt;
    if (!cartItem) return;

    if (addedAt && processedAddedAtRef.current === addedAt) return;

    setCartItems((prev) => {
      const idx = prev.findIndex((it) => it.id === cartItem.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + cartItem.quantity };
        return copy;
      }
      return [...prev, cartItem];
    });

    if (addedAt) processedAddedAtRef.current = addedAt;
  }, [state]);

  const handleQuantityChange = (id: string, newValue: number | ((prev: number) => number)) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const nextQty = typeof newValue === "function" ? newValue(item.quantity) : newValue;
          return { ...item, quantity: Math.max(0, Math.min(100, nextQty)) };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flex flex-col items-left font-poppins w-screen">
      <label className="pageTitle-lbl text-[40px] font-red-rose mt-[25px] mb-[50px] ml-[50px]" aria-label="check out">
        SHOPPING CART
      </label>

      <main className="relative border border-black w-9/10 p-8 flex flex-col ml-[50px] mb-[50px]">
        <div className="cartTop-container flex flex-row justify-between items-center mb-4">
          <label className="text-base">
            My Cart (<span id="cartItemAMT">{cartItems.length}</span>)
          </label>
          <ContinueShoppingButton name="Continue Shopping" onClick={() => navigate('/')} />
        </div>

        <hr className="border-t border-black w-full mb-4" />

        <div className="cartItems-container w-full max-h-[100%] overflow-y-auto border border-gray-300 rounded-md">
          <table className="cartItems-table w-full table-auto">
            <thead className="sticky top-0 bg-white shadow-sm z-10">
              <tr className="text-center">
                <th className="p-3 text-left w-2/5">Product</th>
                <th className="p-3 w-1/5">Price</th>
                <th className="p-3 w-1/5">Quantity</th>
                <th className="p-3 w-1/5">Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((it) => (
                <tr key={it.id} className="text-center">
                  <td className="text-left w-2/5">
                    <img className="inline w-14 h-14 object-cover rounded-md mr-3" src={it.image} alt={it.name} />
                    {it.name}
                  </td>
                  <td>₱ {it.price.toLocaleString()}</td>
                  <td className='w-1/5'>
                    <div className="flex flex-col items-center gap-3">
                      <Counter number={it.quantity} setNumber={(newQty) => handleQuantityChange(it.id, newQty)} />
                    </div>
                  </td>
                  <td>₱ {(it.price * it.quantity).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cartbottom-container mt-6 text-right">
          <CartBuyNow
            name="Confirm Checkout"
            onClick={() => navigate('/checkout', { state: { orderItems: cartItems } })}
          />
        </div>
      </main>
    </div>
  );
}
