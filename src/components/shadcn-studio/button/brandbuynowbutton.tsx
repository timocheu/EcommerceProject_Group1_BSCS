import { Button } from '@/components/ui/button'

import { useHandleNavigate } from '@/components/HandleNavigate'


interface BrandBuynowProps {
    name: string
    onClick?: () => void
}

function BrandBuynow({name, onClick}: BrandBuynowProps){
    const navigate = useHandleNavigate()

    return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
    cursor-pointer' type="button"
    onClick={onClick}>
      {name}
    </Button>
  )
}

export default BrandBuynow
