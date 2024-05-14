import { Swiper, SwiperSlide } from "swiper/react"
import { SectionHeading } from "./common/Common"
import { LeftArrow, RightArrow } from "./common/Icons"
import { ourClientData } from "./common/Helper"
import { useRef } from "react"
import { Virtual } from "swiper/modules"
import { useSliderNavigation } from "./common/Hooks"

const OurClientSec = () => {
    const sliderRef = useRef(null);
    const { handlePrev, handleNext } = useSliderNavigation(sliderRef);
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[150px] xl:pb-[138px]">
            <div className="container max-w-[1295px] relative md:px-20">
                <SectionHeading className='pt-4 text-center' headingLight='Our' headingBoldRight='Clients' />
                <div className="relative mt-6 sm:mt-10">
                    <Swiper ref={sliderRef} spaceBetween={27} modules={[Virtual]} slidesPerView={5} loop={true}>
                        {ourClientData.map((item, index) => (
                            <SwiperSlide key={index} className="p-[22px] border border-lightGrey rounded-md2">
                                <div className="flex items-center justify-center min-h-[111px]">
                                    <img src={item.companyLogo} alt="company-logo" />
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

export default OurClientSec
