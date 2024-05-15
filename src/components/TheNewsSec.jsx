import { useRef } from "react";
import { Description, SectionHeading, SectionTitle } from "./common/Common";
import { LeftArrow, RightArrow } from "./common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { theNewsSecData } from "./common/Helper";
import { useSliderNavigation } from "./common/Hooks";

const TheNewsSec = () => {
    const sliderRef = useRef(null);
    const { handlePrev, handleNext } = useSliderNavigation(sliderRef);
    return (
        <section id="blog" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[150px] xl:pb-[134px]">
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-7 sm:gap-10 sm:flex-row">
                    <div className="flex flex-col sm:items-start">
                        <SectionTitle className='sm:text-start' title='In The News' />
                        <SectionHeading className='pt-4 text-center sm:text-start' headingBoldLeft='Read' headingLight='Our Blog to' headingBoldRight='Learn More' />
                    </div>
                    <div className="flex items-center gap-5 sm:gap-[10px]">
                        <button onClick={handlePrev} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed'><LeftArrow /></button>
                        <button onClick={handleNext} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed'><RightArrow /></button>
                    </div>
                </div>
                <Swiper  ref={sliderRef} spaceBetween={24} modules={[Virtual]} slidesPerView={1} loop={true}
                    breakpoints={{
                        576: { slidesPerView: 2, }
                    }}>
                    {
                        theNewsSecData.map((item, index) => (
                            <SwiperSlide key={index} className="max-w-[558px] mt-5 sm:mt-9  lg:mb-4 border border-black duration-300 hover:shadow-lg border-opacity-10 hover:border-orangeRed hover:border-opacity-10 rounded-md2 py-[14px] px-3 !h-auto">
                                <div className="flex flex-col items-start justify-between h-full">
                                    <div className="flex flex-col ">
                                        <img className="rounded-md" src={item.thumbnail} alt="News Images" />
                                        <p className="font-medium leading-5 text-md font-Poppins text-gray30 mt-[14px]">{item.date}</p>
                                        <h3 className="mt-2 text-xl font-medium text-black font-Poppins">{item.title}</h3>
                                        <Description className='mt-4' description={item.description} />
                                    </div>
                                    <button className="mt-6 mb-[6px] text-lg font-medium text-orangeRed font-Poppins">Read more</button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default TheNewsSec
