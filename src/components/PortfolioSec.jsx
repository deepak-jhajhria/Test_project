import { useRef } from "react";
import { Description, SectionHeading, SectionTitle } from "./common/Common"
import { LeftArrow, RightArrow } from "./common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { thePortfolioSecData } from "./common/Helper";
import { Virtual } from "swiper/modules";
import { useSliderNavigation } from "./common/Hooks";

const PortfolioSec = () => {
    const sliderRef = useRef(null);
    const { handlePrev, handleNext } = useSliderNavigation(sliderRef);
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[150px]">
            <div className="container xl:my-6">
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
            <div className="ml-5 mt-6 sm:mt-10 md:mt-[50px] min-h-[550px] lg:min-h-[603px]">
                <Swiper ref={sliderRef} spaceBetween={16} modules={[Virtual]} slidesPerView={1} loop={true}
                    breakpoints={{556: { slidesPerView: 2, }, 920: { slidesPerView: 3, }, 1240: { slidesPerView: 4, }, }}>
                    {thePortfolioSecData.map((item, index) => (
                        <SwiperSlide key={index} className="w-full max-w-[362px] !h-auto">
                            <div className="relative group">
                                <img className="w-full duration-500 min-h-[506px] group-hover:min-h-[550px] lg:group-hover:min-h-[603px] object-cover rounded-md2" src={item.thumbnail} alt={item.title} />
                                <div className="absolute z-10 top-[60%] sm:top-[70%] max-w-[280px] xl:max-w-[319px] left-4 flex flex-col w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-300">
                                    <p className="text-xl font-medium text-white font-Poppins">{item.title}</p>
                                    <Description className='mt-2 text-white opacity-70' description={item.description} />
                                    <a className="mt-4 text-lg font-medium font-Poppins text-orangeRed" href="#">Know more</a>
                                </div>
                                <span className="absolute top-0 left-0 z-0 flex w-full h-full bg-black opacity-0 rounded-md2 group-hover:opacity-20"></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioSec
