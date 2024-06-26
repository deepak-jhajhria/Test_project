import { Swiper, SwiperSlide } from "swiper/react"
import { Description, Ellipse, SectionHeading, SectionTitle } from "./common/Common"
import { useRef } from "react";
import { EffectFade, Pagination, Virtual } from "swiper/modules";
import { serviceSecData } from "./common/Helper";
import serviceSliderImg from '../assets/images/webp/serviceSecImg.webp'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { LeftArrow, RightArrow } from "./common/Icons";
import { useSliderNavigation } from "./common/Hooks";
import vectorRight from '../assets/images/webp/commonVectorRight.webp'

const Services = () => {
    const sliderRef = useRef(null);
    const { handlePrev, handleNext } = useSliderNavigation(sliderRef);
    return (
        <section id="service" className="relative overflow-x-clip">
            <div className="container max-w-[1320px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[150px] relative md:px-20">
                <SectionTitle title='Services' />
                <SectionHeading className='pt-4 text-center' headingBoldLeft='Your' headingLight='Gateway to' headingBoldRight='Aerial Excellence' />
                <div className="my-6 sm:my-10 md:my-[50px]">
                    <Swiper ref={sliderRef} modules={[EffectFade, Virtual, Pagination]} effect={'fade'} slidesPerView={1} loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", bulletActiveClass: "swiper-pagination-bullet-active", }}>
                        {
                            serviceSecData.map((item, index) => (
                                <SwiperSlide key={index} className="serviceSecSlide">
                                    <div className="grid items-center grid-cols-1 gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
                                        <div className="flex flex-col max-w-[525px] items-center lg:items-start mx-auto lg:mx-0">
                                            <h3 className="font-bold text-orangeRed opacity-10 font-Geometric text-8xl2">{item.id}</h3>
                                            <p className="text-3xl font-bold text-black font-Geometric">{item.title}</p>
                                            <Description className='mt-3 text-center sm:mt-4 lg:text-start' description={item.description} />
                                        </div>
                                        <img className="w-full pointer-events-none rounded-md2" src={serviceSliderImg} alt="serviceSliderImg" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="swiper-pagination"><span className='swiper-pagination-bullet'></span></div>
                <div className="absolute left-0 flex items-center justify-between w-full px-3 max-sm:bottom-9 max-md:bottom-14 md:top-1/2">
                    <button onClick={handlePrev} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group prev-arrow hover:bg-orangeRed hover:border-orangeRed'><LeftArrow /></button>
                    <button onClick={handleNext} className='flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group next-arrow hover:bg-orangeRed hover:border-orangeRed'><RightArrow /></button>
                </div>
            </div>
            <Ellipse className='-right-32 top-1/4'/>
            <img className='absolute right-0 top-[59%] z-10 max-xl:hidden' src={vectorRight} alt="vector ellipse" />
        </section>
    )
}

export default Services
