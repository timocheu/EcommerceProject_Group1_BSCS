import { Button } from '@/components/ui/button'



interface BrandAddtoCartProps {
  name: string
  onClick?: () => void
}


function AddButton({ name, onClick }: BrandAddtoCartProps) {


  const handleClick = () => {
    if (onClick) onClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2 addtocart-btn font-poppins font-bold bg-[#CACACA] border-0 cursor-pointer py-[5px] px-[10px] rounded text-black;'
      onClick={handleClick}>
      {name}
    </Button>
  )
}

export default AddButton

