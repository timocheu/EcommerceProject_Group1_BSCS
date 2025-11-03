import { ShoppingCartIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import CartButton from '@/components/shadcn-studio/button/cartbutton'

import cartimg from '@/assets/Shopping Bag.png'
import { useHandleNavigate } from '@/components/HandleNavigate'
import { useCart } from '@/context/CartContext'

const CartBadge = () => {

    const navigate = useHandleNavigate()
    const { cartCount } = useCart()

    return (
        <div className='relative w-fit'>
            <CartButton src={cartimg} alt="Shopping cart" title="Cart"
                onClick={() => navigate('/cart')} />
            {cartCount > 0 && (
                <Badge
                    id="cartitemAMT"
                    className='absolute -top-1 -right-0.5 h-5 min-w-5 rounded-full px-1 tabular-nums'
                >
                    {cartCount}
                </Badge>
            )}
        </div>
    )
}

export default CartBadge
