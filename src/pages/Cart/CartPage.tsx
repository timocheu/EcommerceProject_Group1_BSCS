import './styles/content.css'

import { useState } from "react";
import { Counter } from '@/components/ui/shadcn-io/counter';

import { MoveLeft } from 'lucide-react'
import { CartItemCard } from '../../components/cartitem-card'
import { useHandleNavigate } from '../../components/HandleNavigate'

import CartBuyNow from '../../components/shadcn-studio/button/cartbuynowbutton'
import ContinueShoppingButton from '@/components/shadcn-studio/button/continueshoppingbutton'
import backimg from './imgs/Right Arrow.png'

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function CartPage() {
    const navigate = useHandleNavigate();
    const [cartItems, setCartItems] = useState<OrderItem[]>([
      { id: "1", name: "RAZER Blade 18 GeForce RTX 5070 Ti", price: 214900.00, image: "#", quantity: 1 },
      { id: "2", name: "Another Laptop", price: 89999.00, image: "#", quantity: 2 },
      { id: "3", name: "Another Laptop", price: 89999.00, image: "#", quantity: 2 },
      { id: "4", name: "Another Laptop", price: 89999.00, image: "#", quantity: 2 },
      { id: "5", name: "Another Laptop", price: 89999.00, image: "#", quantity: 2 },
    ]);

    // Update quantity with min/max bounds and remove if zero
    const handleQuantityChange = (id: string, newValue: number | ((prev: number) => number)) => {
      setCartItems((prev) =>
        prev
          .map((item) => {
            if (item.id !== id) return item;

            // Handle function-based state updates
            const nextQty =
              typeof newValue === "function" ? newValue(item.quantity) : newValue;

            return {
              ...item,
              quantity: nextQty,
            };
          })
          // Filter out items whose quantity <= 0
          // Add a popup for confirmation remove item if quantity == 0
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
                    <ContinueShoppingButton name="Continue Shopping" onClick={() => navigate('/')}/>
                </div>

                <hr className="border-t border-black w-full mb-4" />

                <div className="cartItems-container w-full overflow-auto">
                    <table className="cartItems-table w-full table-auto">
                        <thead>
                            <tr className="text-center">
                                <th className="p-3 text-left">Product</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                            </tr>
                        </thead>

                        <tbody >
                            {cartItems.map((it) => (
                                <tr key={it.id} className="text-center">
                                    <td className="text-left"><img className="inline" src={it.image}/> {it.name}</td>
                                    <td>₱ {it.price.toLocaleString()}</td>
                                    <td>
                                      <div className="flex flex-col items-center gap-3">
                                        <Counter 
                                          number={it.quantity} 
                                          // Magic setter
                                          setNumber={(newQty) => handleQuantityChange(it.id, Math.max(0, Math.min(100, newQty)))} 
                                            />
                                      </div></td>
                                    <td>₱ {(it.price * it.quantity).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="cartbottom-container mt-6 text-right">
                    <CartBuyNow name="Confirm Checkout" onClick={() => navigate('/checkout')}/>
                </div>
            </main>
        </div>
    )
}
