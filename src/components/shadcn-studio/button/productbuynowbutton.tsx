

import { Button } from '@/components/ui/button'

interface BuynowProps {
    name: string
    onClick?: () => void
}

function BuyNowButton({ name, onClick }: BuynowProps) {
    const handleClick = () => {
        if (onClick) onClick()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (
        <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
        font-poppins font-bold rounded px-[15px] py-[10px] border-0 cursor-pointer bg-[#F1F1F1] text-black pl-[20px] pr-[20px]
        pt-[20px] pb-[20px] hover:text-white cursor-pointer'
            onClick={handleClick}>
            {name}
        </Button>
    )
}

export default BuyNowButton
