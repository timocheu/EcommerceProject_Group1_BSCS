import { useLocation } from 'react-router-dom'

import huaweilogo from '@/assets/image 9.png'
import razerlogo from '@/assets/Razer-Inc.-Logo-Vector-removebg-preview 1.png'
import { ProductCard } from '@/components/product-card'

import { HuaweiLaptop, InfinixLaptop, RazerLaptop } from '@/data/Products'

export function BrandPage() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const brandName = params.get('name') || 'Huawei'

    const brandDataMap: Record<string, any> = {
        Huawei: HuaweiLaptop,
        Infinix: InfinixLaptop,
        Razer: RazerLaptop,
    }

    const brandLogoMap: Record<string, string> = {
        Huawei: huaweilogo,
        Infinix: "",
        Razer: razerlogo,
    }

    const brandData = brandDataMap[brandName] || HuaweiLaptop
    const brandLogo = brandLogoMap[brandName]

    const products = Object.values(brandData)

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <section className="brandtitle-container flex flex-row w-full justify-center items-center gap-[5px] mt-[75px] mb-[75px]">
                    {brandLogo && (
                        <img
                            className="brandlogoimg-bp w-[75px] h-[75px]"
                            src={brandLogo}
                            alt={`${brandName}`}
                        />
                    )}
                    <label className="bpbrandname-label text-[50px] font-red-rose">{brandName}</label>
                </section>


                <section className="bpbrandproducts-container flex flex-col justify-center items-center">
                    <div className="bpbrandproductscontent grid grid-cols-2 gap-[60px] mb-[50px]">
                        {/* <ProductCard />
                        <ProductCard /> */}
                        {products.map((prod: any) => (
                            <ProductCard key={prod.laptopid} product={prod} />
                        ))}

                    </div>
                </section>
            </div>
        </>
    )
}