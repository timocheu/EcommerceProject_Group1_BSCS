import { useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import HeaderIconButton from '@/components/shadcn-studio/button/headerbuttonwithicon'
import LogInButton from '@/components/shadcn-studio/button/loginbutton'
import RegisterButton from '@/components/shadcn-studio/button/registerbutton'

import { useHandleNavigate } from '@/components/HandleNavigate'

import usericon from '@/assets/User.png'

const UserPopOver = () => {
  const navigate = useHandleNavigate()
  const [open, setOpen] = useState(false)

  const handleNavigate = (path: string) => {
    setOpen(false) // Close popover first
    setTimeout(() => navigate(path), 150) // Small delay for animation smoothness
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <HeaderIconButton src={usericon} alt="User profile" title="Profile" />
      </PopoverTrigger>

      <PopoverContent className="data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400">
        <div className="grid gap-4">
          <div className="space-y-1 flex flex-col justify-around">
            <LogInButton name="Log In" onClick={() => handleNavigate('/login')} />
            <RegisterButton name="Register" onClick={() => handleNavigate('/signup')} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default UserPopOver
