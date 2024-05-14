import { Swiper, SwiperSlide } from "swiper/react"
import { Description, SectionHeading, SectionTitle } from "./common/Common"
import {  useRef } from "react";
import { Virtual } from "swiper/modules";
import { reviewSecData } from "./common/Helper";
import { LeftArrow, RightArrow } from "./common/Icons";
import { useSliderNavigation } from "./common/Hooks";

const ReviewsSec = () => {
    const sliderRef = useRef(null);
    const { handlePrev, handleNext } = useSliderNavigation(sliderRef);
    return (
        <section className="py-10 sm:py-11 md:py-12 lg:py-[67px]">
            <div className="container max-w-[1295px] relative md:px-20">
                <SectionTitle title='Reviews' />
                <SectionHeading className='pt-4 text-center' headingBoldLeft='Our' headingLight='Costumers Say Something' headingBoldRight='About Us' />
                <div className="mt-6 sm:mt-10 md:mt-14 lg:mt-[76px] relative">
                    <Swiper ref={sliderRef} spaceBetween={27} modules={[Virtual]} slidesPerView={3} loop={true}>
                        {reviewSecData.map((item, index) => (
                            <SwiperSlide key={index} className="p-[22px] border border-black border-opacity-10 rounded-md2">
                                <div className="flex flex-col gap-[13px]">
                                    <div className="flex items-center gap-[10px]">
                                        <img className="w-[54px] h-[54px]" src={item.userImage} alt={item.userName} />
                                        <div className="flex flex-col">
                                            <p className="text-lg font-medium text-black font-Poppins">{item.userName}</p>
                                            <Description description={item.postDate} />
                                        </div>
                                    </div>
                                    <img className="max-w-[125px]" src={item.rating} alt="rating" />
                                    <Description description={item.description} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button onClick={handlePrev} className='absolute flex items-center justify-center w-10 h-10 duration-300 -translate-y-1/2 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed -left-[70px] top-1/2'><LeftArrow /></button>
                    <button onClick={handleNext} className='absolute flex items-center justify-center w-10 h-10 duration-300 -translate-y-1/2 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed -right-[70px] top-1/2'><RightArrow /></button>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSec
