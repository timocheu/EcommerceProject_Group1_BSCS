import { Button } from '@/components/ui/button'


interface SeemoreProp {
    name: string
    onClick: () => void
}

function SeeMoreButton({ name, onClick }: SeemoreProp) {
    const handleClick = () => {
        if (onClick) onClick()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
    bg-white font-poppins font-semibold w-[100px] rounded-[2px] mt-8px self-start cursor-pointer text-black block hover:text-white'
            onClick={handleClick}>
            {name}
        </Button>
    )
}

export default SeeMoreButton
