import { useState } from "react";
import { SectionHeading, SectionTitle } from "./common/Common"
import { experienceSecData } from "./common/Helper";
import { PlayBtn } from "./common/Icons";

const BestExperienceSec = () => {
    const [activeTab, setActiveTab] = useState(3);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className="bg-black sm:mx-6 sm:rounded-xl">
            <div className="container py-10 sm:py-12 md:py-16 lg:py-[77px]">
                <SectionTitle className='text-white after:bg-white before:bg-white' title='THE BEST EXPERIENCE' />
                <SectionHeading className='pt-4 text-center text-white' headingBoldLeft='Know' headingLight='More Through' headingBoldRight='Videos' />
                <div className="relative bg-darkGrey mt-6 sm:mt-10 md:mt-[50px] p-1 sm:p-2 md:p-3 rounded-xl sm:rounded-2xl md:rounded-[22px]">
                    {experienceSecData.map((item, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center ${activeTab === index ? "flex" : "hidden"}`}>
                            <div className="flex flex-col items-center justify-center">
                                <img className="rounded-lg min-h-36" src={item.thumbnail} alt="thumbnail" />
                                <p className="text-center text-white font-medium font-Poppins text-sm sm:text-md tracking-[5.1px]">{item.title}</p>
                            </div>
                            <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><PlayBtn /></span>
                        </div>
                    ))}
                </div>
                <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-5 mt-4 sm:mt-8 md:mt-[50px]">
                    {experienceSecData.map((item, index) => (
                        <img onClick={() => handleTabClick(index)} className={`w-7 h-6 sm:w-10 sm:h-8 md:w-16 md:h-12 lg:w-[92px] object-cover lg:h-20 rounded-md ${activeTab === index ? "w-9 !h-8 sm:w-12 sm:h-10 md:!w-20 md:!h-16 lg:!w-[104px] lg:min-h-[93px] border border-orangeRed border-opacity-30 shadow-md" : ""}`} src={item.thumbnail} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestExperienceSec