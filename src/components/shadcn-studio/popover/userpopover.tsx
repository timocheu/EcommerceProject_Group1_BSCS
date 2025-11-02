import { useId } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'


import HeaderIconButton from '../button/headerbuttonwithicon'
import ButtonRingHover from '../button/button-40'
import LogInButton from '../button/loginbutton'
import RegisterButton from '../button/registerbutton'

import usericon from '../../../assets/User.png'

const members = [
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
        fallback: 'HL',
        name: 'Howard Lloyd',
        designation: 'Product Manager'
    },
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
        fallback: 'OS',
        name: 'Olivia Sparks',
        designation: 'Software Engineer'
    },
    {
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
        fallback: 'HR',
        name: 'Hallie Richards',
        designation: 'UI/UX Designer'
    }
]

const UserPopOver = () => {
    const id = useId()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <HeaderIconButton src={usericon} alt="User profile" title="Profile" />

            </PopoverTrigger>
            <PopoverContent className='data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400'>
                <div className='grid gap-4'>
                    <div className='space-y-1 flex flex-row justify-around'>
                        <LogInButton name="Log In"/>
                        <RegisterButton name="Register"/>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default UserPopOver
