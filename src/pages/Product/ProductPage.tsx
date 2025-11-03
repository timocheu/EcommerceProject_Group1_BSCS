import productimg from '@/assets/Rectangle 4.png';
import ProductSelection from '@/components/productselection'
import BuyNowButton from '@/components/shadcn-studio/button/productbuynowbutton';
import AddCartButton from '@/components/shadcn-studio/button/productaddcart';
import { useHandleNavigate } from '@/components/HandleNavigate';

// import './styles/pbodycontent.css'

export function ProductPage() {

    const images = [productimg, productimg, productimg]
    const navigate = useHandleNavigate()

    return (
        <>
            <section className="flex flex-col p-[10px] mb-[50px] w-screen">
                <div className="flex flex-row mt-[75px] mb-[50px] border-2 border-black w-[1785px] h-[575px] ml-[50px] mr-[50px]">
                    <div className="m-[10px] p-[10px] w-[800px]">
                        <div className="mt-[50px] mb-[5px] flex justify-center">
                            <div>
                                <div className="ml-auto mr-auto mt-[0px]">
                                    <ProductSelection images={images}/>
                                </div>
                                {/* <img className="w-[400px] h-[300px] object-contain" src={productimg} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="m-[10px] w-full flex flex-col p-[10px] ">
                        <label className="font-bold text-[50px]">RAZER Blade 18 GeForce RTX 5070 Ti</label>
                        <label className="font-bold">Product Description: </label>
                        <label>
                            THE MOST POWERFUL BLADE EVER.Experience true desktop-level performance on the biggest screen with
                            the Razer Blade 18 gaming laptop. Armed with up to NVIDIA® GeForce RTX™ 5070 laptop GPU and the
                            latest Intel® Core™ Ultra 9 275HX processor, game and create flawlessly on our most powerful Blade
                            ever.
                        </label>
                        <label className="font-bold text-[40px]">
                            ₱ 214,900.00
                        </label>
                        <label>
                            Colors:
                        </label>
                        <div className="flex flex-row gap-[5px] mt-[8px]">
                            <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-black"></div>
                        </div>

                        <div className="mt-[10px] flex flex-row items-center gap-[10px] w-[70px] bg-[#D9D9D9] rounded-[10px]">
                            <button className="font-bold rounded px-[10px] py-[5px] border-0 cursor-pointer bg-[#F1F1F1]" data-set="decrease" aria-label="decrease quantity">-</button>
                            <div className="w-[100px] flex items-center justify-center">
                                <label className="" data-set="quantity amount">0</label>
                            </div>
                            <button className="font-bold rounded px-[10px] py-[5px] border-0 cursor-pointer bg-black text-white" data-set="increase" aria-label="increase quantity">+</button>
                        </div>

                        <div className="mt-[25px] flex flex-row gap-[10px]">
                            <AddCartButton name="Add to cart"/> 
                            <BuyNowButton name="Buy now" onClick={() => navigate('/checkout')}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="mb-[10px]">
                        <img className="max-w-full h-auto" src={productimg} alt="laptop image" />
                    </div>

                    <label className="font-bold text-[30px]">
                        RAZER Blade 18
                    </label>

                    <div className="border border-black w-[1250px] mt-[25px] p-[25px] pl-[50px] flex flex-col items-start">
                        <label className="text-[35px] font-extrabold underline">Specification </label>
                        <table className="mt-[10px]">
                            <tbody>
                                <tr>
                                    <th id="productbrand" className="pt-[12px] pb-[12px] text-left w-[250px]">Brand</th>
                                    <td id="productbrandvalue">Razer</td>
                                </tr>
                                <tr>
                                    <th id="productmodel" className="pt-[12px] pb-[12px] text-left w-[250px]">Model</th>
                                    <td id="productmodelvalue">Blade 18</td>
                                </tr>
                                <tr>
                                    <th id="productcolor" className="pt-[12px] pb-[12px] text-left w-[250px]">Color</th>
                                    <td id="productcolorvalue">Black</td>
                                </tr>
                                <tr>
                                    <th id="productprocessor" className="pt-[12px] pb-[12px] text-left w-[250px]">Processor</th>
                                    <td id="productprocessorvalue">Intel® Core Arrow Lake Ultra 9-275HX 36 MB Smart Cache</td>
                                </tr>
                                <tr>
                                    <th id="productOS" className="pt-[12px] pb-[12px] text-left w-[250px]">Operating System</th>
                                    <td id="productOSvalue">Windows 11 Home</td>
                                </tr>
                                <tr>
                                    <th id="productgraphic" className="pt-[12px] pb-[12px] text-left w-[250px]">Graphics</th>
                                    <td id="productgraphicvalue">GeForce RTX 5070 Ti</td>
                                </tr>
                                <tr>
                                    <th id="productramstorage" className="pt-[12px] pb-[12px] text-left w-[250px]">RAM and Storage</th>
                                    <td id="productramstoragevalue">16 GB 5600 MHz RAM, 1 TB SSD</td>
                                </tr>
                                <tr>
                                    <th id="productdisplay" className="pt-[12px] pb-[12px] text-left w-[250px]">Display</th>
                                    <td id="productdisplayvalue">18" Dual UHD+ 240 Hz | FHD+ 440 Hz</td>
                                </tr>
                                <tr>
                                    <th id="productbatterypack" className="pt-[12px] pb-[12px] text-left w-[250px]">Battery Pack</th>
                                    <td id="productbatterypackvalue">Built-in 99 WHr</td>
                                </tr>
                                <tr>
                                    <th id="productadditionalfeat" className="pt-[12px] pb-[12px] text-left w-[250px]">Addtional features</th>
                                    <td id="productaddtionalfeatvalue">Windows® Hello built-in IR 5MP Webcam, Mechanical Privacy Shutter Razer™ Synapse 3 enabled with performance, programmable keyboard, backlighting, and fan control Kensington™ Security Slot</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}