import droneProfessionalImage from '../assets/images/webp/ourExpertiseSecImg.webp'
import droneProfessionalImageWithVector from '../assets/images/webp/ourExpertiseSecImgWithVector.webp'
import { CommonBtn, Description, Ellipse, SectionHeading, SectionTitle } from './common/Common'
import vectorRight from '../assets/images/webp/commonVectorRight.webp'

const OurExperienceSec = () => {
    return (
        <section className="relative bg-paleOrange overflow-x-clip">
            <div className="container xl:px-2 py-12 sm:py-14 md:py-16 lg:py-[90px] relative z-10">
                <div className="grid items-center grid-cols-1 lg:grid-cols-7">
                    <div className='relative flex justify-center order-2 mt-8 lg:mr-8 lg:col-span-4 lg:order-1 lg:justify-start'>
                        <img className='w-100 lg:hidden' src={droneProfessionalImage} alt="droneProfessionalImage" />
                        <img className='hidden w-100 lg:block' src={droneProfessionalImageWithVector} alt="droneProfessionalImage" />
                    </div>
                    <div className='flex lg:col-span-3 flex-col lg:max-w-[487px] order-1 lg:order-2'>
                        <SectionTitle positionText='lg:justify-start' title='book shows our expertise ' />
                        <SectionHeading className='pt-4 text-center lg:text-start' headingBoldLeft='Tailored' headingLight='Drone Solutions ' headingBoldRight='for Every Need' />
                        <Description className='pt-3 text-center lg:text-start' description="Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec. Amet curabitur eget integer tincidunt. Eu bibendum semper magna arcu quam elit egestas. Euismod quis velit aliquet mattis non dui. Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec." />
                        <div className='flex flex-col-reverse items-center justify-center w-full gap-4 mt-8 lg:justify-between sm:flex-row'>
                            <CommonBtn btnName='Buy Now' />
                            <div className='flex items-center p-1 bg-white rounded-full'>
                                <input className='w-full px-3 text-lg font-light border-0 outline-none placeholder:text-gray30 font-Poppins placeholder:opacity-50' placeholder="Email here" type="text" />
                                <CommonBtn className='!px-5 !py-2' arrowClassName='hidden' btnName='Download' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Ellipse className='z-10 -left-32 top-[40%]'/>
            <img className='absolute right-0 top-[40%] max-xl:hidden' src={vectorRight} alt="vector ellipse" />
        </section>
    )
}

export default OurExperienceSec
