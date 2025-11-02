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

import HeaderButton from '../button/headerbutton'
import huaweilogo from '../../../assets/image 9.png'
import razerlogo from '../../../assets//Razer-Inc.-Logo-Vector-removebg-preview 1.png'

import { useHandleNavigate } from '@/components/HandleNavigate'



const HeaderShopOverButton = () => {

    const navigate = useHandleNavigate()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <HeaderButton name="Shop now"/>
            </PopoverTrigger>
            <PopoverContent className='data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400'>
                <div className='grid gap-4'>
                    <div className='space-y-1 flex flex-row justify-around'>
                        <HeaderButton name="Infinix" onClick={() => navigate('/brand')}/>
                        <HeaderButton name="Huawei" img={huaweilogo}
                        onClick={() => navigate('/brand')}/>
                    </div>
                    <div className="flex flex-row justify-center">
                        <HeaderButton name="Razer" img={razerlogo}
                        onClick={() => navigate('/brand')}/>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default HeaderShopOverButton
