import './styles/content.css'

import { useState } from "react";
import { Counter } from '@/components/ui/shadcn-io/counter';

import { MoveLeft } from 'lucide-react'
import { CartItemCard } from '../../components/cartitem-card'
import { useHandleNavigate } from '../../components/HandleNavigate'

import CartBuyNow from '../../components/shadcn-studio/button/cartbuynowbutton'
import ContinueShoppingButton from '@/components/shadcn-studio/button/continueshoppingbutton'
import backimg from './imgs/Right Arrow.png'

export function CartPage() {
    const navigate = useHandleNavigate()
    const [number1, setNumber1] = useState(42);
    const cartItems = [
        { id: 1, image: 'images/productlaptop.png', name: 'RAZER Blade 18 GeForce RTX 5070 Ti', color: 'Black', price: '214,900.00', qty: 2 },
        { id: 2, image: 'images/productlaptop.png', name: 'Another Laptop', color: 'Silver', price: '89,999.00', qty: 1 },
    ];


    return (
        <div className="flex flex-col items-left font-poppins w-screen">
            <label className="pageTitle-lbl text-[40px] font-red-rose mt-[25px] mb-[50px] ml-[50px]" aria-label="check out">
                SHOPPING CART
            </label>


            <main className="border border-black w-9/10 h-[1250px]  p-8 flex flex-col ml-[50px] mb-[50px]">
                <div className="cartTop-container flex flex-row justify-between items-center mb-4">
                    <label className="text-base">My Cart (<span id="cartItemAMT">{cartItems.length}</span>)</label>


                    <ContinueShoppingButton name="Continue Shopping"
                    onClick={() => navigate('/home')}/>

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
                                    <td>₱ {it.price}</td>
                                    <td>
                                      <div className="flex flex-col items-center gap-3">
                                        <Counter 
                                          number={number1} 
                                          setNumber={setNumber1}
                                        />
                                      </div></td>
                                    <td>21</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="cartbottom-container mt-6 text-right">
                    <CartBuyNow name="Buy now" onClick={() => navigate('/checkout')}/>
                </div>
            </main>
        </div>
    )
}
