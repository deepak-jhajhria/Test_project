import droneProfessionalImage from '../assets/images/webp/ourExpertiseSecImg.png'
import { CommonBtn, Description, SectionHeading, SectionTitle } from './common/Common'
const OurExperienceSec = () => {
    return (
        <section className=" bg-paleOrange">
            <div className="container xl:px-2 py-10 sm:py-12 md:py-16 lg:py-[88px]">
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-7 md:gap-10 xl:gap-14">
                    <div className='relative order-2 lg:col-span-4 lg:order-1'>
                        <img className='w-100' src={droneProfessionalImage} alt="droneProfessionalImage" />
                    </div>
                    <div className='flex lg:col-span-3 flex-col lg:max-w-[487px] order-1 lg:order-2'>
                        <SectionTitle title='book shows our expertise ' />
                        <SectionHeading className='pt-4' headingBoldLeft='Tailored' headingLight='Drone Solutions ' headingBoldRight='for Every Need' />
                        <Description className='pt-3' description="Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec. Amet curabitur eget integer tincidunt. Eu bibendum semper magna arcu quam elit egestas. Euismod quis velit aliquet mattis non dui. Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec." />
                        <div className='flex flex-col-reverse items-center justify-between w-full gap-4 mt-8 sm:flex-row'>
                            <CommonBtn btnName='Buy Now' />
                            <div className='p-[6px] rounded-full bg-white flex items-center'>
                                <input className='w-full px-3 text-lg font-light border-0 outline-none placeholder:text-gray30 font-Poppins' placeholder="Email here" type="text" />
                                <CommonBtn className='px-5 py-2' arrowClassName='hidden' btnName='Download' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurExperienceSec
