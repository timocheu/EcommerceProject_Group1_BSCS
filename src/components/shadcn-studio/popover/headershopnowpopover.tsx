import React, { useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import HeaderButton from '@/components/shadcn-studio/button/headerbutton'
import huaweilogo from '@/assets/image 9.png'
import razerlogo from '@/assets/Razer-Inc.-Logo-Vector-removebg-preview 1.png'

import { useHandleNavigate } from '@/components/HandleNavigate'

const HeaderShopOverButton = () => {
  const [open, setOpen] = useState(false)
  const navigate = useHandleNavigate()

  // Helper: closes popover then navigates
  const handleClick = (path: string) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <HeaderButton name="Shop now" />
      </PopoverTrigger>

      <PopoverContent
        className="
          data-[state=open]:slide-in-from-bottom-20
          data-[state=closed]:slide-out-to-bottom-20
          data-[state=closed]:zoom-out-100
          data-[state=open]:zoom-in-100
          w-80 duration-400
        "
      >
        <div className="grid gap-4">
          <div className="space-y-1 flex flex-row justify-around">
            <HeaderButton name="Infinix" onClick={() => handleClick('/brand')} />
            <HeaderButton
              name="Huawei"
              img={huaweilogo}
              onClick={() => handleClick('/brand')}
            />
          </div>
          <div className="flex flex-row justify-center">
            <HeaderButton
              name="Razer"
              img={razerlogo}
              onClick={() => handleClick('/brand')}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default HeaderShopOverButton
