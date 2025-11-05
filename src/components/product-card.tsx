import '../pages/Brand/styles/bpbodycontent.css'
import BrandBuynow from '@/components/shadcn-studio/button/brandbuynowbutton'
import AddButton from '@/components/shadcn-studio/button/addbutton'
import { useNavigate } from 'react-router-dom'

export function ProductCard({ product }: any) {
    const navigate = useNavigate()

    //  Navigate to product details
    const handleImageClick = () => {
        navigate('/product', { state: { product } })
    }

    const handleAddToCart = () => {
        console.log(" Product passed to cart:", product);

        const newCartItem = {
            id: product.laptopid?.toString() ?? '',
            name: product.laptopname,
            price: product.price,
            image: product.imgs?.[0] ?? '',
            quantity: 1,
        };

        // add unique token so CartPage can detect duplicate processing
        const addedAt = Date.now();

        navigate('/cart', { state: { cartItem: newCartItem, addedAt } });
    };



    const handleBuynow = () => {

        if (!product || !product.laptopname) {
            console.error("⚠️ Product not ready yet:", product);
            return;
        }
        
        const orderItems = [
            {
                id: product.id || product.laptopid?.toString() || Date.now().toString(),
                name: product.laptopname,
                price: product.price,
                image: product.imgs?.[0] ?? '',
                quantity: 1,
            },
        ];

        console.log("🛒 Navigating to checkout with:", orderItems);

        navigate('/checkout', { state: { orderItems } });
    };

    return (
        <article className="flex flex-col border border-black p-[10px] gap-[5px] rounded">
            <div className="bpproductstop text-center">
                <div
                    className="bpprodcutimg-container cursor-pointer transition-transform hover:scale-105"
                    onClick={handleImageClick}
                >
                    <img
                        className="productimg w-[125px] h-[100px] object-cover mx-auto"
                        src={product.imgs[0] || 'images/image 2.png'}
                        alt={product.laptopname}
                    />
                </div>
                <label className="bpproductname-label block mt-2 text-base font-medium">
                    {product.laptopname}
                </label>
            </div>

            <div className="bpproductmiddle">
                <hr className="border-t border-black my-2" />
                <label className="bpproductspecs-label font-poppins text-sm text-gray-700">
                    • {product.processor}
                    <br />
                    • {product.display}
                    <br />
                    • {product.ramstorage}
                </label>
            </div>

            <div className="bpproductbottom mt-[8px] flex flex-row gap-[10px] items-center">
                <label className="productprice-label text-[20px] font-semibold">
                    ₱{product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                </label>

                {/*  Add to Cart */}
                <AddButton name="Add to cart" onClick={handleAddToCart} />

                {/*  Buy Now */}
                <BrandBuynow name="Buy now" onClick={handleBuynow} />
            </div>
        </article>
    )
}
