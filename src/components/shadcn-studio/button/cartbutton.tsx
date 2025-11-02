// headerbuttonwithicon.tsx
import React from 'react'
import { Button } from '@/components/ui/button'

export type CartButtonProps = {
  src: string
  alt: string
  title?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

// forwardRef so PopoverTrigger can pass a ref to this component
const CartButton = React.forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ src, alt, title, onClick, className }, ref) => {
    return (
      <Button
        // forward the ref to the actual Button so PopoverTrigger can attach it
        ref={ref}
        title={title}
        onClick={onClick}
        className={
          `p-5 rounded-md bg-white hover:bg-black transition-colors duration-150 cursor-pointer
           hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 group`
          + (className ? ` ${className}` : '')
        }
      >
        <img
          src={src}
          alt={alt}
          className="
            w-[30px] h-[30px] object-contain
            filter invert-0 brightness-100
            transition-[filter] duration-75 ease-linear
            group-hover:invert group-hover:brightness-0
          "
        />
      </Button>
    )
  }
)

CartButton.displayName = 'CartButton'

export default CartButton
