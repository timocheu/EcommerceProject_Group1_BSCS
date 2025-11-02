import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'


interface ContinueShoppingProps {
    name: string
    onClick: () => void
}

function ContinueShoppingButton({ name, onClick }: ContinueShoppingProps) {
    const handleClick = () => {
        if (onClick) onClick()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (
        <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
        bg-white hover:bg-white gap-2 cursor-pointer font-bold text-sm px-4 py-2
        flex flex-row items-center justify-center gap-2 text-black'
            onClick={handleClick}>
            <MoveLeft className=""></MoveLeft>
            {name}
        </Button>
    )
}

export default ContinueShoppingButton
