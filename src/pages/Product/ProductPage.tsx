import { useLocation } from 'react-router-dom'
import { useState } from "react";

import ProductSelection from '@/components/productselection'
import BuyNowButton from '@/components/shadcn-studio/button/productbuynowbutton';
import AddCartButton from '@/components/shadcn-studio/button/productaddcart';
import { useHandleNavigate } from '@/components/HandleNavigate';


export function ProductPage() {

    const { state } = useLocation()
    const navigate = useHandleNavigate()
    const product = state?.product


    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-xl font-semibold mb-4">No product selected.</p>
                <button
                    onClick={() => navigate('/brand')}
                    className="px-4 py-2 bg-black text-white rounded"
                >
                    Back to Brand
                </button>
            </div>
        )
    }

    const [quantity, setQuantity] = useState(1);
    const images = product.imgs?.length ? product.imgs : ['/images/image 2.png']

    const handleIncrease = () => setQuantity(prev => Math.min(prev + 1, 100));
    const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 1));


    const handleAddToCart = () => {
        const cartItem = {
            id: product.laptopid || Date.now().toString(),
            name: product.laptopname,
            price: product.price,
            image: images[0],
            quantity: quantity,
        };

        const addedAt = Date.now();

        // navigate to CartPage and send product info
        navigate('/cart', { state: { cartItem, addedAt } });
    };




    return (
        <>
            <section className="flex flex-col p-[10px] mb-[50px] w-screen">
                <div className="flex flex-row mt-[75px] mb-[50px] border-2 border-black w-[9/10] h-[575px] ml-[50px] mr-[50px]">
                    <div className="m-[10px] p-[10px] w-[800px]">
                        <div className="mt-[50px] mb-[5px] flex justify-center">
                            <div>
                                <div className="ml-auto mr-auto mt-[0px]">
                                    <ProductSelection images={images} />
                                </div>
                                {/* <img className="w-[400px] h-[300px] object-contain" src={productimg} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="m-[10px] w-full flex flex-col p-[10px] ">
                        <label className="font-bold text-[50px]">{product.laptopname}</label>
                        <label className="font-bold">Product Description: </label>
                        <label>
                            {product.description}
                        </label>
                        <label className="font-bold text-[40px]">
                            ₱ {product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                        </label>
                        {/* <label>
                            Colors:
                        </label>
                        <div className='flex flex-row gap-[5px]'>
                            {product.colors?.map((color: string, index: number) => (
                                <div key={index} className={`w-[30px] h-[30px] rounded-full cursor-pointer bg-[${color}]`} />
                            )) || (
                                    <>
                                        <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                                        <div className="w-[30px] h-[30px] rounded-full bg-gray-400"></div>
                                    </>
                                )}

                        </div> */}

                        <div className="mt-[10px] flex flex-row items-center gap-[10px] bg-[#D9D9D9] pl-[0px] rounded  w-[75px] px-2">
                            <button
                                onClick={handleDecrease}
                                className="font-bold rounded px-[10px] py-[5px]  border-0 cursor-pointer bg-[#F1F1F1]"
                                aria-label="decrease quantity"
                            >
                                -
                            </button>
                            <div className="w-[60px] flex items-center justify-center">
                                <label className="font-semibold text-[18px]" aria-label="quantity amount">
                                    {quantity}
                                </label>
                            </div>
                            <button
                                onClick={handleIncrease}
                                className="font-bold rounded px-[10px] py-[5px] border-0 cursor-pointer bg-black text-white"
                                aria-label="increase quantity"
                            >
                                +
                            </button>
                        </div>

                        <div className="mt-[25px] flex flex-row gap-[10px]">
                            <AddCartButton name="Add to cart" onClick={handleAddToCart} />
                            <BuyNowButton
                                name="Buy now"
                                onClick={() =>
                                    navigate('/checkout', {
                                        state: {
                                            orderItems: [
                                                {
                                                    id: product.id || product.laptopid?.toString() || Date.now().toString(),
                                                    name: product.laptopname,
                                                    price: product.price,
                                                    image: images[0],
                                                    quantity: quantity, // ✅ pass quantity here too
                                                },
                                            ],
                                        },
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="mb-[10px]">
                        <img
                            className="max-w-full h-auto"
                            src={images[0]}
                            alt={product.laptopname}
                        />
                    </div>

                    <label className="font-bold text-[30px]">
                        {product.laptopname}
                    </label>

                    <div className="border border-black w-[1250px] mt-[25px] p-[25px] pl-[50px] flex flex-col items-start">
                        <label className="text-[35px] font-extrabold underline">Specification </label>
                        <table className="mt-[10px]">
                            <tbody>
                                <tr>
                                    <th id="productbrand" className="pt-[12px] pb-[12px] text-left w-[250px]">Brand</th>
                                    <td id="productbrandvalue">{product.brand}</td>
                                </tr>
                                <tr>
                                    <th id="productmodel" className="pt-[12px] pb-[12px] text-left w-[250px]">Model</th>
                                    <td id="productmodelvalue">{product.model}</td>
                                </tr>
                                <tr>
                                    <th id="productcolor" className="pt-[12px] pb-[12px] text-left w-[250px]">Color</th>
                                    <td id="productcolorvalue">{product.color}</td>
                                </tr>
                                <tr>
                                    <th id="productprocessor" className="pt-[12px] pb-[12px] text-left w-[250px]">Processor</th>
                                    <td id="productprocessorvalue">{product.processor}</td>
                                </tr>
                                <tr>
                                    <th id="productOS" className="pt-[12px] pb-[12px] text-left w-[250px]">Operating System</th>
                                    <td id="productOSvalue">{product.operatingsystem}</td>
                                </tr>
                                <tr>
                                    <th id="productgraphic" className="pt-[12px] pb-[12px] text-left w-[250px]">Graphics</th>
                                    <td id="productgraphicvalue">{product.graphics}</td>
                                </tr>
                                <tr>
                                    <th id="productramstorage" className="pt-[12px] pb-[12px] text-left w-[250px]">RAM and Storage</th>
                                    <td id="productramstoragevalue">{product.ramstorage}</td>
                                </tr>
                                <tr>
                                    <th id="productdisplay" className="pt-[12px] pb-[12px] text-left w-[250px]">Display</th>
                                    <td id="productdisplayvalue">{product.display}</td>
                                </tr>
                                <tr>
                                    <th id="productbatterypack" className="pt-[12px] pb-[12px] text-left w-[250px]">Battery Pack</th>
                                    <td id="productbatterypackvalue">{product.batterypack}</td>
                                </tr>
                                <tr>
                                    <th id="productadditionalfeat" className="pt-[12px] pb-[12px] text-left w-[250px]">Addtional features</th>
                                    <td id="productaddtionalfeatvalue">{product.additional}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}