import { navLinkData } from "./common/Helper";
import { useOverflowHidden } from "./common/Hooks";
import Logo from '../assets/images/webp/logo.png'
import { Twirl as Hamburger } from 'hamburger-react';
import { BtnArrow } from "./common/Icons";

const NavBar = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <nav>
            <div className="container flex items-center justify-between pt-6 xl:px-2">
                <a href="/"><img className="w-16 h-12 md:w-[92px] md:h-[58px]" src={Logo} alt="pageLogo" /></a>
                <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center font-Poppins gap-10 sm:gap-16 lg:gap-[126px] max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col justify-center xl:ml-16`}>
                    {
                        navLinkData.map((item, index) => (
                            <li key={index}>
                                <a className="font-normal text-white text-md links" href={item.pathUrl} onClick={() => setOpen(false)}>{item.linkName}</a>
                            </li>
                        ))
                    }
                    <li className="lg:hidden"><button className="flex items-center px-5 py-3 font-medium text-white duration-300 border border-white rounded-full hover:border-orangeRed hover:bg-orangeRed font-Poppins text-md">Contact <span><BtnArrow /></span></button></li>
                </ul>
                <button className="hidden lg:flex items-center duration-300 hover:bg-orangeRed hover:border-orangeRed  py-[15px] font-Poppins text-md sm:text-lg font-medium text-white border border-white rounded-full px-[27px]">Contact <span><BtnArrow /></span></button>
                <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={32} rounded distance="sm" direction='right' duration={0.5} color='#FFF' />
                </div>
            </div>
            {
                isOpen && (
                    <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-20'>
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar
