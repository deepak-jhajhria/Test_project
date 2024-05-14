import { CommonBtn, Description, Input, Lable, SectionHeading, SectionTitle } from "./common/Common"
import { LocationIcon, MailIcon } from "./common/Icons"

const ContactUs = () => {
  return (
    <section className="bg-paleOrange">
      <div className="container py-10 sm:py-12 md:py-16 lg:pt-[101px] lg:pb-20">
        <div className="grid items-center grid-cols-2">
          <div className="flex flex-col max-w-[390px] mr-10">
            <SectionHeading className='pt-4' headingBoldLeft='Contact' headingLight='Us' />
            <Description className='mt-2' description="Are you interested in drones? Send us an email and let's get in touch!" />
            <div className="flex items-center gap-5 mt-6">
              <LocationIcon />
              <a className="text-lg font-medium font-Poppins text-gray30" href="http://" target="_blank">Saint Petersburg, FL 33712</a>
            </div>
            <div className="flex items-center gap-5 mt-6">
              <MailIcon />
              <a className="text-lg font-medium font-Poppins text-gray30" href="http://" target="_blank">wade@hartleyaerial.com</a>
            </div>
          </div>
          <div className="px-8 bg-white py-9 rounded-md2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Lable text='First Name' />
                <Input type='' />
              </div>
              <div>
                <Lable text='Last Name' />
                <Input type='' />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-[30px]">
              <div>
                <Lable text='Email' />
                <Input type='' />
              </div>
              <div>
                <Lable text='Phone Number' />
                <Input type='' />
              </div>
            </div>
            <div className="mt-[30px]">
              <Lable text='Subject' />
              <Input type='' />
            </div>
            <div className="mt-[30px]">
              <Lable text='Message' />
              <textarea className="w-full h-[140px] mt-[10px] rounded-md p-2 text-lg font-light border duration-300  focus:border-orangeRedLight border-lightGrey30 outline-none placeholder:text-gray30 font-Poppins" name="" id=""></textarea>
            </div>
            <div className="mt-11">
              <CommonBtn className='' arrowClassName='hidden' btnName='Submit' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
