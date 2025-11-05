import { Button } from '@/components/ui/button'

interface BuynowProps {
  name: string
  onClick?: () => void
}

function Buynow({ name, onClick }: BuynowProps) {
  

  return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
        w-[100px] h-[35px] rounded-full bg-[#434343] text-white text-[16px] font-red-rose overflow-hidden cursor-pointer'
      onClick={onClick}>
      {name}
    </Button>
  )
}

export default Buynow
