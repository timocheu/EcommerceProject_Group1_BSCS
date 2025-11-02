import { Button } from '@/components/ui/button'

interface ShopnowProps {
  name: string
  onClick?: () => void
}

function ShopnowButton({ name, onClick }: ShopnowProps) {
  const handleClick = () => {
    if (onClick) onClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
        bg-[#434343] w-[150px] h-[50px] rounded-full
        border-2 border-black relative mt-4 cursor-pointer
        text-[20px] font-red-rose overflow-hidden'
      onClick={handleClick}>
      {name}
    </Button>
  )
}

export default ShopnowButton
