import '../pages/Brand/styles/bpbodycontent.css'
import BrandBuynow from '@/components/shadcn-studio/button/brandbuynowbutton'
import AddButton from '@/components/shadcn-studio/button/addbutton'

export function ProductCard() {

    return (
        <>
            <article className="flex flex-col border border-black p-[10px] gap-[5px] rounded">
                <div className="bpproductstop text-center">
                    <div className="bpprodcutimg-container">
                        <img className="productimg w-[125px] h-[100px] object-cover mx-auto" src="images/image 2.png" alt="product image" />
                    </div>
                    <label className="bpproductname-label block mt-2 text-base font-medium">HUAWEI MateBook X Pro</label>
                </div>


                <div className="bpproductmiddle">
                    <hr className="border-t border-black my-2" />
                    <label className="bpproductspecs-label font-poppins text-sm text-gray-700">
                        • 980 g Ultralight
                        <br />
                        • Flexible OLED Display2
                        <br />
                        • Intel® Core™ Ultra 9 Processor3
                    </label>
                </div>


                <div className="bpproductbottom mt-[8px] flex flex-row gap-[10px] items-center">
                    <label className="productprice-label text-[20px] font-semibold">₱ 89,999.00</label>


                    <AddButton name="Add to cart"/>


                    <BrandBuynow name="Buy now"/>
                </div>
            </article>
        </>
    )
}