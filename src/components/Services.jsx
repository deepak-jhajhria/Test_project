import { Swiper, SwiperSlide } from "swiper/react"
import { Description, SectionHeading, SectionTitle } from "./common/Common"
import { useCallback, useRef } from "react";
import { EffectFade, Pagination, Virtual } from "swiper/modules";
import { serviceSecData } from "./common/Helper";
import serviceSliderImg from '../assets/images/webp/serviceSecImg.png'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
const Services = () => {
    const sliderRefSecond = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRefSecond.current) return;
        sliderRefSecond.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRefSecond.current) return;
        sliderRefSecond.current.swiper.slideNext();
    }, []);
    return (
        <section>
            <div className="container py-[150px]">
                <SectionTitle title='Services' />
                <SectionHeading className='pt-4 text-center' headingBoldLeft='Your' headingLight='Gateway to' headingBoldRight='Aerial Excellence' />
                <div className="mt-[50px]">
                    <Swiper ref={sliderRefSecond} modules={[EffectFade, Virtual, Pagination]} effect={'fade'} slidesPerView={1} loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}>
                        {
                            serviceSecData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grid items-center grid-cols-2">
                                        <div className="flex flex-col">
                                            <h3>{item.id}</h3>
                                            <p>{item.title}</p>
                                            <Description description={item.description} />
                                        </div>
                                        <img src={serviceSliderImg} alt="serviceSliderImg" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination mt-[10px]"><span className='swiper-pagination-bullet'></span></div>
                    <button onClick={handlePrev} className='duration-300 group prev-arrow'><span className="w-10 h-10 rounded-lg shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg className="w-5 fill-black group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 0 42 16" fill="none">
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" />
                    </svg></span></button>
                    <button onClick={handleNext} className='group next-arrow '><span className="w-10 h-10 rounded-lg shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg className="w-5 fill-black group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 0 42 16" fill="none">
                        <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" />
                    </svg></span></button>
                </div>
            </div>
        </section>
    )
}

export default Services
