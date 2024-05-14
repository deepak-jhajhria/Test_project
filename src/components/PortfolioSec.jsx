import { useCallback, useRef } from "react";
import { Description, SectionHeading, SectionTitle } from "./common/Common"
import { LeftArrow, RightArrow } from "./common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { thePortfolioSecData } from "./common/Helper";
import { Pagination, Virtual } from "swiper/modules";

const PortfolioSec = () => {
    const sliderRefSecond = useRef(null);
    const handlePrev = useCallback(() => { if (!sliderRefSecond.current) return; sliderRefSecond.current.swiper.slidePrev(); }, []);
    const handleNext = useCallback(() => { if (!sliderRefSecond.current) return; sliderRefSecond.current.swiper.slideNext(); }, []);
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[150px]">
            <div className="container ">
                <div className="flex flex-col items-center justify-between gap-7 sm:gap-10 sm:flex-row">
                    <div className="flex flex-col sm:items-start">
                        <SectionTitle className='sm:text-start' title='Portfolio' />
                        <SectionHeading className='pt-4 text-center sm:text-start' headingBoldLeft='See' headingLight='Our Work' headingBoldRight='Examples' />
                    </div>
                    <div className="flex items-center gap-5 sm:gap-[10px]">
                        <button onClick={handlePrev} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed'><LeftArrow /></button>
                        <button onClick={handleNext} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed'><RightArrow /></button>
                    </div>
                </div>
            </div>
            <div className="ml-5 mt-6 sm:mt-10 md:mt-[50px]">
                <Swiper ref={sliderRefSecond} spaceBetween={16} modules={[Virtual, Pagination]} slidesPerView={1} loop={true}
                    breakpoints={{ 576: { slidesPerView: 2, }, 768: { slidesPerView: 4, }, }}>
                    {thePortfolioSecData.map((item, index) => (
                        <SwiperSlide key={index} className="w-full !h-auto">
                            <div className="relative group">
                                <img className="w-full duration-500 min-h-[506px] group-hover:min-h-[603px] object-cover rounded-md2" src={item.thumbnail} alt={item.title} />
                                <div className="absolute top-[70%] max-w-[319px] left-4 flex flex-col w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-300">
                                    <p className="text-xl font-medium text-white font-Poppins">{item.title}</p>
                                    <Description className='mt-2' description={item.description} />
                                    <a className="mt-4 text-lg font-medium font-Poppins text-orangeRed" href="/">Know more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioSec
