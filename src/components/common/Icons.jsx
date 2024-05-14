import { useSwiper } from "swiper/react"


export const LeftArrow = () => {
    return (
        <svg className="duration-300 group-hover:stroke-white stroke-black" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0778 15.2613L7.87012 10.0536L13.0778 4.84595" strokeWidth="1.62464" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const RightArrow = () => {
    return (
        <svg className="duration-300 group-hover:stroke-white stroke-black" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.4781 15.2613L12.6858 10.0536L7.4781 4.84595" strokeWidth="1.62464" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const PlayBtn = () => {
    return (
        <svg className="w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_1_2307)">
                <circle cx="39.2778" cy="39" r="38.3838" fill="#E67E22" fillOpacity="0.1" />
            </g>
            <g filter="url(#filter1_b_1_2307)">
                <circle cx="39.2777" cy="38.9999" r="30.9115" fill="white" />
            </g>
            <path d="M54.4375 38.1339C55.1042 38.5188 55.1042 39.481 54.4375 39.8659L32.4474 52.5619C31.7808 52.9468 30.9474 52.4656 30.9474 51.6958L30.9474 26.3039C30.9474 25.5341 31.7808 25.053 32.4474 25.4379L54.4375 38.1339Z" fill="#E67E22" />
            <defs>
                <filter id="filter0_b_1_2307" x="-20.906" y="-21.1838" width="120.368" height="120.368" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.9" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2307" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2307" result="shape" />
                </filter>
                <filter id="filter1_b_1_2307" x="-13.4338" y="-13.7116" width="105.423" height="105.423" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.9" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2307" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2307" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
export const SwiperArrow = () => {
    
    const swiper = useSwiper();
    return (
        <div className=''>
            {/* <button onClick={() => swiper.slidePrev()} className=' duration-300 bg-[#1A1B39] rounded-full hover:bg-[#313EF7] w-10 h-10 flex items-center justify-center'><span className="min-w-[32px]  h-8 m-[10px] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2" />
            </svg></span></button>
            <button onClick={() => swiper.slideNext()} className='duration-300 bg-[#1A1B39] rounded-full hover:bg-[#313EF7] w-10 h-10 flex items-center justify-center'><span className="min-w-[32px] h-8 m-[10px] flex items-center justify-center"><svg class="fill-white group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M0.599088 15.0669C0.354644 14.8224 0.232422 14.5113 0.232422 14.1336C0.232422 13.7558 0.354644 13.4447 0.599088 13.2002L5.79909 8.00023L0.599088 2.80023C0.354644 2.55578 0.232422 2.24467 0.232422 1.86689C0.232422 1.48912 0.354644 1.17801 0.599088 0.933561C0.843533 0.689116 1.15464 0.566895 1.53242 0.566895C1.9102 0.566895 2.22131 0.689116 2.46576 0.933561L8.59909 7.06689C8.73242 7.20023 8.82709 7.34467 8.88309 7.50023C8.93909 7.65578 8.96664 7.82245 8.96576 8.00023C8.96576 8.17801 8.93775 8.34467 8.88175 8.50023C8.82575 8.65578 8.73153 8.80023 8.59909 8.93356L2.46576 15.0669C2.22131 15.3113 1.9102 15.4336 1.53242 15.4336C1.15464 15.4336 0.843533 15.3113 0.599088 15.0669Z" /></svg></span></button> */}
            <div className="absolute left-0 flex items-center justify-between w-full px-3 md:px-0 max-sm:bottom-9 max-md:bottom-14 md:top-1/2">
                <button onClick={() => swiper.slidePrev()} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed'><LeftArrow /></button>
                <button onClick={() => swiper.slideNext()} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed'><RightArrow /></button>
            </div>
        </div>
    )
}