import { useNavigate } from 'react-router-dom'

import ButtonRingHover from '@/components/shadcn-studio/button/button-40'
import huaweilogo from './imgs/image 9.png'
import laptopimg11 from './imgs/image 11.png'
import laptopimg12 from './imgs/laptop12.png'
import laptopimg13 from './imgs/laptop13.png'
import featureitem from './imgs/featureitem.png'
import featureproduct1 from './imgs/image 2.png'
import featureproduct2 from './imgs/image 3.png'
import featureproduct3 from './imgs/image 4.png'
import featureproduct4 from './imgs/image 6.png'
import razorlogo from './imgs/Razer-Inc.-Logo-Vector-removebg-preview 1.png'
import ShopwnowButton from '../../components/shadcn-studio/button/shopnowbutton'
import Buynow from '../../components/shadcn-studio/button/homebuynowbutton'
import SeeMoreButton from '../../components/shadcn-studio/button/seemorebutton'


import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { useHandleNavigate } from '../../components/HandleNavigate'


// import './styles/bodycontent.css'
// import './styles/headers.css'

const brands = [
    {
        id: 1,
        name: 'INFINIX',
        bg: laptopimg11,
        logo: null,
        description: `Infinix's brand spirit aims at empowering the lives of today's youth so they can challenge the norm and stand out from the crowd all around the world.`,
    },
    {
        id: 2,
        name: 'HUAWEI',
        bg: laptopimg12,
        logo: huaweilogo,
        description: `Our vision and mission is to bring digital to every person, home and organization for a fully connected, intelligent world.`,
    },
    {
        id: 3,
        name: 'Razor',
        bg: laptopimg13,
        logo: razorlogo,
        description: `Our vision and mission is to bring digital to every person, home and organization for a fully connected, intelligent world.`,
    },
];


export function HomePage() {

    const navigate = useHandleNavigate()


    return (
        <>

            <main id="body-content">
                <div id="content-container" className="w-screen">
                    <div id="featureditems-container" className="relative flex flex-row h-[88vh] bg-gradient-to-b from-white/12 to-gray-600/50">
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

                            <ShopwnowButton name="Shop now" data-set="featureitems"
                            onClick={() => navigate('/product')} />

                        </div>

                        <div id="featureditemsimg-container" className="absolute right-[250px] top-[50px] w-[400px] h-[475px]">
                            <img id="featureitems-img" src={featureitem} alt="featured item image" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Featured Products */}
                    <div id="featureproducts-container" className="flex flex-col items-center mb-[50px]">
                        <div id="featureproducts-label-container" className="mt-[75px]">
                            <label className="headers-label text-[60px] font-red-rose font-bold text-black">Featured Products</label>
                        </div>

                        <div id="featureproductsitems-container" className="flex flex-row flex-wrap justify-center gap-6 mt-6 px-6">
                            {/* Each product tile */}
                            <div className="featureitems-container flex flex-col items-center m-4">
                                <div className="featureitems-img-container flex items-center justify-center rounded-md bg-[radial-gradient(circle,_#ffffff20,_#5757577f)]">
                                    <img className="featureitems-img p-4 w-[250px] h-[185px] object-contain cursor-pointer" src={featureproduct1} alt="feature item image" />
                                </div>

                                <div className="featureitemscontent-container flex flex-col justify-start w-full mt-3">
                                    <label className="featureitems-name font-red-rose text-[15px] font-bold text-black">INFINIX ZERO BOOK 13</label>
                                    <Buynow name="Buy now"
                                    onClick={() => navigate('/product')} />
                                </div>
                            </div>

                            {/* Repeat other featureitems containers (kept structure identical) */}
                            <div className="featureitems-container flex flex-col items-center m-4">
                                <div className="featureitems-img-container flex items-center justify-center rounded-md bg-[radial-gradient(circle,_#ffffff20,_#5757577f)]">
                                    <img className="featureitems-img p-4 w-[250px] h-[185px] object-contain cursor-pointer" src={featureproduct2} alt="feature item image" />
                                </div>

                                <div className="featureitemscontent-container flex flex-col justify-start w-full mt-3">
                                    <label className="featureitems-name font-red-rose text-[15px] font-bold text-black">HUAWEI MateBook 14s</label>
                                    <Buynow name="Buy now" 
                                    onClick={() => navigate('/product')}/>
                                </div>
                            </div>

                            <div className="featureitems-container flex flex-col items-center m-4">
                                <div className="featureitems-img-container flex items-center justify-center rounded-md bg-[radial-gradient(circle,_#ffffff20,_#5757577f)]">
                                    <img className="featureitems-img p-4 w-[250px] h-[185px] object-contain cursor-pointer" src={featureproduct3} alt="feature item image" />
                                </div>

                                <div className="featureitemscontent-container flex flex-col justify-start w-full mt-3">
                                    <label className="featureitems-name font-red-rose text-[15px] font-bold text-black">Razer Blade 16</label>
                                    <Buynow name="Buy now" 
                                    onClick={() => navigate('/product')}/>

                                </div>
                            </div>

                            <div className="featureitems-container flex flex-col items-center m-4">
                                <div className="featureitems-img-container flex items-center justify-center rounded-md bg-[radial-gradient(circle,_#ffffff20,_#5757577f)]">
                                    <img className="featureitems-img p-4 w-[250px] h-[185px] object-contain cursor-pointer" src={featureproduct4} alt="feature item image" />
                                </div>

                                <div className="featureitemscontent-container flex flex-col justify-start w-full mt-3">
                                    <label className="featureitems-name font-red-rose text-[15px] font-bold text-black">INFINIX INBOOK X3 SLIM</label>
                                    <Buynow name="Buy now" 
                                    onClick={() => navigate('/product')}/>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="featurebrands-container" className='text-center '>
                        <div id="brandheader-container" className='w-[100%] mb-[10px]'>
                            <label id="headers-label" className='font-red-rose text-[40px]'>
                                Shop by Brand
                            </label>
                        </div>

                        <section id="brand-wrapper" className='w-[100%] pl-[20px] pr-[20px] box-border bg-transparent'>


                            {/* viewport: hides overflow so page width doesn't change */}
                            <div className="relative w-full overflow-hidden">
                                {/* track: flex row, contains two back-to-back copies of the brand list */}
                                <div
                                    className="brands-track flex gap-[20px] will-change-transform animate-scrollLoop"
                                    // pause on hover/focus (Tailwind arbitrary property)
                                    onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                                    onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                                    onFocus={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                                    onBlur={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                                >
                                    {/* first set */}
                                    {brands.map((b) => (
                                        <article key={`b-${b.id}`} className="brand-card relative bg-black w-[575px] h-[300px] flex-shrink-0 rounded-lg">
                                            <img src={b.bg} alt={`${b.name} bg`} className="absolute inset-0 w-full h-full object-cover brightness-[0.8]" />
                                            <div className="absolute top-5 left-7 right-7 z-10 text-white flex flex-col gap-2">
                                                <div className="flex items-center gap-3">
                                                    {b.logo && <img src={b.logo} alt={`${b.name} logo`} className="w-20 h-20 object-contain" />}
                                                    <span className="text-[40px] font-bold m-0 [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">{b.name}</span>
                                                </div>
                                                <p className="text-[16px] leading-[1.3] max-w-[420px]">{b.description}</p>
                                                <div><SeeMoreButton name="See more" onClick={() => navigate('/brand')} /></div>
                                            </div>
                                        </article>
                                    ))}

                                    {/* duplicate set (seamless) */}
                                    {brands.map((b) => (
                                        <article key={`b-dup-${b.id}`} className="brand-card relative bg-black w-[575px] h-[300px] flex-shrink-0 rounded-lg">
                                            <img src={b.bg} alt={`${b.name} bg`} className="absolute inset-0 w-full h-full object-cover brightness-[0.8]" />
                                            <div className="absolute top-5 left-7 right-7 z-10 text-white flex flex-col gap-2">
                                                <div className="flex items-center gap-3">
                                                    {b.logo && <img src={b.logo} alt={`${b.name} logo`} className="w-20 h-20 object-contain" />}
                                                    <span className="text-[40px] font-bold m-0 [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">{b.name}</span>
                                                </div>
                                                <p className="text-[16px] leading-[1.3] max-w-[420px]">{b.description}</p>
                                                <div><SeeMoreButton name="See more"  onClick={() => navigate('/brand')} /></div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </main >


        </>
    )
}
