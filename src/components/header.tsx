import carticon from '../assets/Shopping Bag.png'
import usericon from '../assets/User.png'
import { useNavigate } from 'react-router-dom'

import CartButton from './shadcn-studio/button/cartbutton'
import HeaderButton from './shadcn-studio/button/headerbutton'
import HeaderIconButton from './shadcn-studio/button/headerbuttonwithicon'
import UserPopOver from './shadcn-studio/popover/userpopover'
import HeaderShopOverButton from './shadcn-studio/popover/headershopnowpopover'
import CartBadge from './shadcn-studio/badge/cartbadge'

import { useHandleNavigate} from './HandleNavigate'

export function Header() {

    const navigate = useHandleNavigate()

    return (

        <>
            <header className="flex items-center justify-self-center justify-between w-95/100 border py-[10px] px-[20px] bg-white">
                {/* left / nav */}
                <nav className="flex gap-2.5">
                    <HeaderButton name="Home" onClick={() => navigate("/")} />
                    <HeaderShopOverButton/>
                    <HeaderButton name="Contact" />
                </nav>

                {/* center logo */}
                <div className="flex-4 flex justify-center items-center">
                    {/* use semantic element (button or a) if clickable; label -> span */}
                    <span
                        className="cursor-pointer text-[50px] font-bold"
                        style={{ fontFamily: '"Red Rose", serif' }}
                        role="heading"
                        aria-level={1}
                        onClick={() => navigate('/home')}
                    >
                        JAVA'S
                    </span>
                </div>

                {/* right side icons */}
                <div className="flex items-center gap-3 flex-1 justify-end">
                    <CartBadge/>
                    <UserPopOver/>
                </div>
            </header>
        </>
    )

}
