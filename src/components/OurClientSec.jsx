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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[150px] xl:pb-32">
            <div className="container max-w-[1295px] relative md:px-20">
                <SectionHeading className='mb-6 text-center sm:mb-10' headingLight='Our' headingBoldRight='Clients' />
                <div className="relative">
                    <Swiper ref={sliderRef} spaceBetween={27} modules={[Virtual]} slidesPerView={1} loop={true}
                        breakpoints={{ 456: { slidesPerView: 2, }, 920: { slidesPerView: 4, }, 1240: { slidesPerView: 5, }, }} >
                        {ourClientData.map((item, index) => (
                            <SwiperSlide key={index} className="p-[22px] border cursor-pointer border-lightGrey duration-300 hover:shadow-xl !flex items-center justify-center rounded-md2 !h-[111px]  xl:mb-2">
                                <a href={`http://${item.componyUrl}`} target="_blank" rel="noopener noreferrer"><img src={item.companyLogo} alt="company-logo" /></a>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="flex items-center justify-between px-5 mt-5 md:px-0 md:mt-0">
                        <button onClick={handlePrev} className='md:absolute flex items-center  justify-center w-10 h-10 duration-300 md:-translate-y-1/2 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed md:-left-[70px]  md:top-1/2'><LeftArrow /></button>
                        <button onClick={handleNext} className='md:absolute flex items-center  justify-center w-10 h-10 duration-300 md:-translate-y-1/2 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed md:-right-[70px]  md:top-1/2'><RightArrow /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClientSec
