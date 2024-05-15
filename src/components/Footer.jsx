import logo from '../assets/images/webp/footerLogo.webp'
import { Description } from './common/Common'
import { InstaIcon, TelegramIcon, YouTubeIcon } from './common/Icons'
const Footer = () => {
    return (
        <footer className="bg-darkBlack">
            <div className="container">
                <div className="grid grid-col-2">
                    <div className="flex flex-col max-w-[388px]">
                        <a href=""><img src={logo} alt="Footer Logo" /></a>
                        <Description className='mt-2 text-gray40' description='Lorem ipsum dolor sit amet consectetur. Vulputate ac amet commodo adipiscing interdum netus id.' />
                        <div className="flex items-center gap-3 mt-7">
                            <a href="http://instagram.com"><InstaIcon /></a>
                            <a href="http://telegram.com"><TelegramIcon /></a>
                            <a href="http://youtube.com"><YouTubeIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
