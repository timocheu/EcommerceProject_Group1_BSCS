import { Button } from '@/components/ui/button'

interface HeaderbuttonProps {
    name: string
    onClick?: ( )=> void
}

function LogInButton({name, onClick}:HeaderbuttonProps) {
    return (
        <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2 bg-white text-black text-[20px] hover:text-white
        font-poppins'
            onClick={onClick}
        >
            {name}
        </Button>
    )
}

export default LogInButton
