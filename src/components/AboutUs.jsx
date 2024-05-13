import mountainImg from '../assets/images/webp/aboutUsSecImg.png'
import { CommonBtn, Description, SectionHeading, SectionTitle } from './common/Common'
const AboutUs = () => {
    return (
        <section className=" bg-paleOrange">
            <div className="container pt-[62px] pb-[115px]">
                <div className="grid items-center grid-cols-2">
                    <img src={mountainImg} alt="mountainImg" />
                    <div className='flex flex-col lg:max-w-[462px]'>
                        <SectionTitle title='About Us' />
                        <SectionHeading className='pt-4 text-center' headingBoldLeft='Get to Know Us:' headingLight='Where Innovation' headingBoldRight='Meet Sky' />
                        <Description className='pt-3' description="We at Hartley Aerial cherish the role that we play in the drone service industry. We make it easy for your company, regardless of its size, to acquire professional drone imagery and data, anywhere you may need it." />
                        <CommonBtn btnName='Meet the Team'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
