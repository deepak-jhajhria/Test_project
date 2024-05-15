import { Description, SectionHeading, SectionTitle } from "./common/Common"
import { chooseUsSecData } from "./common/Helper"

const ChooseUs = () => {
    return (
        <section>
            <div className="container py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[141px] xl:pb-[150px]">
                <SectionTitle title='Why Choose Us' />
                <SectionHeading className='pt-4 text-center' headingBoldLeft='Unmatched' headingLight='Expertise, Unrivalled' headingBoldRight='Results' />
                <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:mt-10 md:mt-12">
                    {chooseUsSecData.map((items, index) => (
                        <div key={index} className={`h-auto col-span-1 ${items.id === 3 ? "md:col-span-2 lg:col-span-1 flex justify-center" : ""}`}>
                            <div className="p-3 border duration-300 hover:shadow-lg rounded-[10px] border-gainsBore h-full">
                                <div className={`flex flex-col gap-4 ${items.id === 2 ? "md:flex-col-reverse md:pt-2" : ""}`}>
                                    <img className="rounded-lg xl:min-h-[165px]" src={items.thumbnail} alt="thumbnail" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-semibold text-black font-Poppins">{items.title}</h3>
                                        <Description className='pt-3' description={items.description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ChooseUs
