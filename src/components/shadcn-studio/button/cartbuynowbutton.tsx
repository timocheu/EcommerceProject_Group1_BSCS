

import { Button } from '@/components/ui/button'

interface CartBuynowProps {
    name: string
    onClick?: () => void
}

function CartBuyNow({ name, onClick }: CartBuynowProps) {
    const handleClick = () => {
        if (onClick) onClick()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (
        <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
        font-poppins text-[24px] pl-[20px] pr-[20px] pt-[20px] pb-[20px] cursor-pointer'
            onClick={handleClick}>
            {name}
        </Button>
    )
}

export default CartBuyNow
