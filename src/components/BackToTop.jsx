import { useEffect, useState } from "react";
import { BackToTopIcon } from "./common/Icons";
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        isVisible &&
        <div onClick={scrollToTop} className='fixed z-30 bottom-10 right-3 '>
            <button className="z-50 flex items-center justify-center w-8 h-8 duration-300 border rounded-full shadow-md hover:shadow-xl group sm:w-12 sm:h-12 bg-orangeRed hover:scale-90 border-orangeRed hover:bg-white">
                <BackToTopIcon />
            </button>
        </div>
    )
};

export default BackToTop;