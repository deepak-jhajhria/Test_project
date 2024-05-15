import { CommonBtn, Description, Ellipse, Input, Lable, SectionHeading, SectionTitle } from "./common/Common"
import { LocationIcon, MailIcon } from "./common/Icons"
import vector from '../assets/images/webp/commonVector.webp'

const ContactUs = () => {
  return (
    <section className="relative bg-paleOrange overflow-x-clip">
      <div className="container py-12 sm:py-14 md:py-16 lg:pt-[101px] lg:pb-20">
        <div className="grid items-center gap-8 lg:gap-2 lg:grid-cols-9">
          <div className="flex flex-col lg:col-span-4 lg:max-w-[390px] mr-10 justify-center lg:justify-start items-center lg:items-start">
            <SectionHeading headingBoldLeft='Contact' headingLight='Us' />
            <Description className='mt-2 text-center lg:text-start' description="Are you interested in drones? Send us an email and let's get in touch!" />
            <div className="flex items-center gap-5 mt-6">
              <LocationIcon />
              <a className="text-lg font-medium font-Poppins text-gray30" href="http://" target="_blank">Saint Petersburg, FL 33712</a>
            </div>
            <div className="flex items-center gap-5 mt-6">
              <MailIcon />
              <a className="text-lg font-medium font-Poppins text-gray30" href="http://" target="_blank">wade@hartleyaerial.com</a>
            </div>
          </div>
          <div className="px-5 py-6 bg-white sm:px-8 lg:col-span-5 sm:py-9 rounded-md2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex flex-col">
                <Lable text='First Name' />
                <Input type='' />
              </div>
              <div className="flex flex-col">
                <Lable text='Last Name' />
                <Input type='' />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 mt-5 sm:mt-[30px] grid-cols-1">
              <div className="flex flex-col">
                <Lable text='Email' />
                <Input type='' />
              </div>
              <div className="flex flex-col">
                <Lable text='Phone Number' />
                <Input type='' />
              </div>
            </div>
            <div className="mt-5 sm:mt-[30px]">
              <Lable text='Subject' />
              <Input type='' />
            </div>
            <div className="mt-5 sm:mt-[30px]">
              <Lable text='Message' />
              <textarea className="w-full h-28 sm:h-[140px] mt-[10px] rounded-md p-2 text-lg font-light border duration-300  focus:border-orangeRedLight border-lightGrey30 outline-none placeholder:text-gray30 font-Poppins" name="" id=""></textarea>
            </div>
            <div className="mt-6 sm:mt-11">
              <CommonBtn className='' arrowClassName='hidden' btnName='Submit' />
            </div>
          </div>
        </div>
      </div>
      <Ellipse className='z-0 -left-32 top-[60%]'/>
      <img className='absolute left-0 z-10 top-1/2 max-xl:hidden' src={vector} alt="vector ellipse" />
    </section>
  )
}

export default ContactUs
