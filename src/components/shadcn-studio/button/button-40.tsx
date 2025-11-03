import { Button } from '@/components/ui/button'



function ButtonRingHover({name}: {name: string}){
    return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2
    cursor-pointer'>
      {name}
    </Button>
  )
}

export default ButtonRingHover
