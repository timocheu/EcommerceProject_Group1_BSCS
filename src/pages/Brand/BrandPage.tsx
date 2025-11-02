import logoicon from './imgs/image 9.png'
import { ProductCard } from '../../components/product-card'


export function BrandPage() {

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <section className="brandtitle-container flex flex-row w-full justify-center items-center gap-[5px] mt-[75px] mb-[75px]">
                    <img className="brandlogoimg-bp w-[75px] h-[75px]" src={logoicon} alt="brand logo" />
                    <label className="bpbrandname-label text-[50px] font-red-rose">HUAWEI BRAND</label>
                </section>


                <section className="bpbrandproducts-container flex flex-col justify-center items-center">
                    <div className="bpbrandproductscontent grid grid-cols-2 gap-[60px] mb-[50px]">
                        <ProductCard />
                        <ProductCard />

                    </div>
                </section>
            </div>
        </>
    )
}