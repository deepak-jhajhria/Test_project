import { Description, SectionHeading, SectionTitle } from "./common/Common"
import { chooseUsSecData } from "./common/Helper"

const ChooseUs = () => {
    return (
        <section>
            <div className="container xl:pt-[141px] xl:pb-[150px]">
                <SectionTitle title='Why Choose Us' />
                <SectionHeading className='pt-4 text-center' headingBoldLeft='Unmatched' headingLight='Expertise, Unrivalled' headingBoldRight='Results' />
                <div className="grid grid-cols-3 gap-6 mt-12">
                    {
                        chooseUsSecData.map((items, index) => (
                            <div key={index} className="h-auto col-span-1">
                                <div className="p-3 border rounded-[10px] border-gainsBore h-full">
                                    <div className={`flex flex-col gap-4 ${items.id === 2 ? "flex-col-reverse" : ""}`}>
                                        <img className="rounded-lg" src={items.thumbnail} alt="thumbnail" />
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-black font-Poppins">{items.title}</h3>
                                            <Description className='pt-3' description={items.description} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ChooseUs
