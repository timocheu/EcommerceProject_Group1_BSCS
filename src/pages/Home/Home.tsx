import { useHandleNavigate } from '@/components/HandleNavigate'

import huaweilogo from '@/assets/image 9.png'
import laptopimg11 from '@/assets/image 11.png'
import laptopimg12 from '@/assets/laptop12.png'
import laptopimg13 from '@/assets/laptop13.png'
import featureitem from '@/assets/featureitem.png'

import razorlogo from '@/assets/Razer-Inc.-Logo-Vector-removebg-preview 1.png'
import ShopwnowButton from '@/components/shadcn-studio/button/shopnowbutton'
import Buynow from '@/components/shadcn-studio/button/homebuynowbutton'
import SeeMoreButton from '@/components/shadcn-studio/button/seemorebutton'



import { HuaweiLaptop, InfinixLaptop} from '@/data/Products'


const brands = [
    {
        id: 1,
        name: 'Infinix',
        bg: laptopimg11,
        logo: null,
        description: `Infinix's brand spirit aims at empowering the lives of today's youth so they can challenge the norm and stand out from the crowd all around the world.`,
    },
    {
        id: 2,
        name: 'Huawei',
        bg: laptopimg12,
        logo: huaweilogo,
        description: `Our vision and mission is to bring digital to every person, home and organization for a fully connected, intelligent world.`,
    },
    {
        id: 3,
        name: 'Razer',
        bg: laptopimg13,
        logo: razorlogo,
        description: `Razer builds the world's best gaming hardware, software, and systems to push performance to the next level.`,
    },
]

export function HomePage() {
    const navigate = useHandleNavigate()

    // 🧠 Combine all products into one array
    const featuredProducts = [
        HuaweiLaptop.product1,
        HuaweiLaptop.product2,
        InfinixLaptop.product1,
        InfinixLaptop.product2,
    ]

    const huawei = featuredProducts[0]

    // ✅ helper: navigate to brand dynamically
    const handleSeeMore = (brand: string) => {
        navigate(`/EcommerceProject_Group1_BSCS/brand?name=${encodeURIComponent(brand)}`)
    }

    return (
        <main id="body-content">
            <div id="content-container" className="w-screen justify-self-center">
                {/* ======= Featured Section ======= */}
                <div
                    id="featureditems-container"
                    className="relative flex flex-row h-[88vh] bg-gradient-to-b from-white/12 to-gray-600/50"
                >
                    <div id="featureitems-description" className="flex flex-col pl-[250px] justify-center flex-[3]">
                        <div id="featureitems-brand">
                            <label className="font-red-rose text-[75px] font-bold text-black">HUAWEI</label>
                        </div>

                        <div id="feautreitems-model">
                            <label className="font-red-rose text-[30px] text-black">MateBook X Pro 2021</label>
                        </div>

                        <div id="featureitems-content" className="max-w-[500px] mt-4">
                            <label className="font-poppins text-[18px] text-black">
                                Our online laptop store offers a wide selection of laptops from top brands. Customers can
                                easily compare models, read details, and buy securely with fast delivery and trusted
                                service.
                            </label>
                        </div>

                        <ShopwnowButton
                            name="Shop now"
                            data-set="featureitems"
                            onClick={() => navigate('/product', { state: { product: huawei } } )}
                        />
                    </div>

                    <div
                        id="featureditemsimg-container"
                        className="absolute right-[250px] top-[50px] w-[400px] h-[475px]"
                    >
                        <img
                            id="featureitems-img"
                            src={featureitem}
                            alt="featured item image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* ======= Featured Products ======= */}
                <div
                    id="featureproductsitems-container"
                    className="flex flex-row flex-wrap justify-center gap-6 mt-6 px-6"
                >
                    {featuredProducts.map((product) => (
                        <div
                            key={product.laptopid}
                            className="featureitems-container flex flex-col items-center m-4"
                        >
                            <div className="featureitems-img-container flex items-center justify-center rounded-md bg-[radial-gradient(circle,_#ffffff20,_#5757577f)]
                            cursor-pointer transition-transform hover:scale-105"
                            onClick={() => navigate('/product', { state: { product } })}>
                                <img
                                    className="featureitems-img p-4 w-[250px] h-[185px] object-contain cursor-pointer"
                                    src={product.imgs[0]} //  main image
                                    alt={product.laptopname}
                                />
                            </div>

                            <div className="featureitemscontent-container flex flex-col justify-start mt-3">
                                <label className="featureitems-name font-red-rose text-[15px] font-bold text-black">
                                    {product.laptopname}
                                </label>

                                {/*  Pass full product data to ProductPage */}
                                <Buynow
                                    name="Buy now"
                                    onClick={() => navigate('/product', { state: { product } })}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ======= Shop by Brand (Carousel) ======= */}
                <section id="featurebrands-container" className="text-center">
                    <div id="brandheader-container" className="w-[100%] mb-[10px]">
                        <label id="headers-label" className="font-red-rose text-[40px]">
                            Shop by Brand
                        </label>
                    </div>

                    <section id="brand-wrapper" className="pl-[20px] pr-[20px] box-border bg-transparent">
                        {/* viewport: hides overflow so page width doesn't change */}
                        <div className="relative overflow-hidden">
                            {/* track: flex row, contains two back-to-back copies of the brand list */}
                            <div
                                className="brands-track flex gap-[20px] will-change-transform animate-scrollLoop"
                                onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                                onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                                onFocus={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                                onBlur={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                            >
                                {/*  First set */}
                                {brands.map((b) => (
                                    <article
                                        key={`b-${b.id}`}
                                        className="brand-card relative bg-black w-[575px] h-[300px] flex-shrink-0 rounded-lg cursor-pointer"
                                    >
                                        <img
                                            src={b.bg}
                                            alt={`${b.name} bg`}
                                            className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
                                        />
                                        <div className="absolute top-5 left-7 right-7 z-10 text-white flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                {b.logo && (
                                                    <img
                                                        src={b.logo}
                                                        alt={`${b.name} logo`}
                                                        className="w-20 h-20 object-contain"
                                                    />
                                                )}
                                                <span className="text-[40px] font-bold m-0 [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                                                    {b.name}
                                                </span>
                                            </div>
                                            <p className="text-[16px] leading-[1.3] max-w-[420px]">{b.description}</p>
                                            <div>
                                                <SeeMoreButton name="See more" onClick={() => handleSeeMore(b.name)} />
                                            </div>
                                        </div>
                                    </article>
                                ))}

                                {/*  Duplicate set (for infinite scroll illusion) */}
                                {brands.map((b) => (
                                    <article
                                        key={`b-dup-${b.id}`}
                                        className="brand-card relative bg-black w-[575px] h-[300px] flex-shrink-0 rounded-lg cursor-pointer"
                                    >
                                        <img
                                            src={b.bg}
                                            alt={`${b.name} bg`}
                                            className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
                                        />
                                        <div className="absolute top-5 left-7 right-7 z-10 text-white flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                {b.logo && (
                                                    <img
                                                        src={b.logo}
                                                        alt={`${b.name} logo`}
                                                        className="w-20 h-20 object-contain"
                                                    />
                                                )}
                                                <span className="text-[40px] font-bold m-0 [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                                                    {b.name}
                                                </span>
                                            </div>
                                            <p className="text-[16px] leading-[1.3] max-w-[420px]">{b.description}</p>
                                            <div>
                                                <SeeMoreButton name="See more" onClick={() => handleSeeMore(b.name)} />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}
