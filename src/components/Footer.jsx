import logo from '../assets/images/webp/footerLogo.png'
import { Description, Ellipse, Link } from './common/Common'
import { footerLinks } from './common/Helper'
import { InstaIcon, TelegramIcon, YouTubeIcon } from './common/Icons'

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-darkBlack">
            <div className="container relative z-20 pt-11">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col max-w-[388px] col-span-1">
                        <a href="#"><img className='w-20 h-16 md:w-[96px] md:h-[74px]' src={logo} alt="Footer Logo" /></a>
                        <Description className='mt-2 text-gray40' description='Lorem ipsum dolor sit amet consectetur. Vulputate ac amet commodo adipiscing interdum netus id.' />
                        <div className="flex items-center gap-3 mt-5 lg:mt-7">
                            <a target="_blank" rel="noopener noreferrer" className='duration-300 hover:-translate-y-3' href="http://instagram.com"><InstaIcon /></a>
                            <a target="_blank" rel="noopener noreferrer" className='duration-300 hover:-translate-y-3' href="http://telegram.com"><TelegramIcon /></a>
                            <a target="_blank" rel="noopener noreferrer" className='duration-300 hover:-translate-y-3' href="http://youtube.com"><YouTubeIcon /></a>
                        </div>
                    </div>
                    <div className='flex justify-between col-span-1 gap-6 mt-8 max-sm:flex-wrap sm:gap-12 lg:mt-0'>
                        <ul className="flex flex-col gap-[10px]">
                            <li className='font-medium font-Poppins text-md text-whiteGrey'>Quick Links</li>
                            {footerLinks[0].quickLinks.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} linkText={item.title} />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className='font-medium font-Poppins text-md text-whiteGrey'>About Us</li>
                            {footerLinks[1].aboutUs.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} linkText={item.title} />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li className='font-medium font-Poppins text-md text-whiteGrey'>Register</li>
                            {footerLinks[2].register.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} linkText={item.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="py-4 sm:py-5 font-normal px-3 text-center border-t border-white font-Poppins text-md text-gray40 border-opacity-20 mt-6 sm:mt-[34px]">©{(new Date().getFullYear())} Hartley Aerial. All Rights Reserved </p>
            <Ellipse className='-bottom-20 -right-20 ' />
        </footer>
    )
}

export default Footer
