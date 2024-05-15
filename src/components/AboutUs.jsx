import mountainImg from '../assets/images/webp/aboutUsSecImg.webp'
import mountainImgWithoutEllipse from '../assets/images/webp/aboutUsSecImg.png'
import { CommonBtn, Description, SectionHeading, SectionTitle } from './common/Common'
const AboutUs = () => {
    return (
        <section className=" bg-paleOrange">
            <div className="container xl:px-2 py-12 sm:py-14 md:py-[62px]">
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-7 md:gap-10 xl:gap-14">
                    <div className='relative flex justify-center order-2 lg:col-span-4 lg:order-1'>
                        <img className='hidden w-100 lg:block' src={mountainImg} alt="mountainImg" />
                        <img className='block w-100 lg:hidden' src={mountainImgWithoutEllipse} alt="mountainImg" />
                    </div>
                    <div className='flex lg:col-span-3 flex-col lg:max-w-[462px] order-1 lg:order-2'>
                        <SectionTitle positionText='lg:justify-start' title='About Us' />
                        <SectionHeading className='pt-3 text-center sm:pt-4 lg:text-start' headingBoldLeft='Get to Know Us:' headingLight='Where Innovation' headingBoldRight='Meet Sky' />
                        <Description className='pt-2 text-center sm:pt-3 lg:text-start' description="We at Hartley Aerial cherish the role that we play in the drone service industry. We make it easy for your company, regardless of its size, to acquire professional drone imagery and data, anywhere you may need it." />
                        <div className='flex justify-center mt-5 sm:mt-8 lg:justify-start'>
                            <CommonBtn btnName='Meet the Team' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
