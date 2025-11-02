// src/components/shadcn-studio/button/headerbutton.tsx
import React from 'react'
import { Button } from '@/components/ui/button'

interface HeaderButtonProps {
  name: string
  onClick?: () => void
  img?: string // ✅ can accept imported image variables (e.g. from import userIcon)
}

const HeaderButton = React.forwardRef<HTMLButtonElement, HeaderButtonProps>(
  ({ name, img, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        className="ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2 bg-white text-black text-[20px] hover:text-white cursor-pointer px-[20px] flex items-center gap-2"
        style={{ fontFamily: '"Red Rose", serif' }}
      >
        {/* ✅ Render only if image variable exists */}
        {img && (
          <img
            src={img}
            alt={name}
            className="w-8 h-8 object-contain"
          />
        )}
        {name}
      </Button>
    )
  }
)

HeaderButton.displayName = 'HeaderButton'
export default HeaderButton
