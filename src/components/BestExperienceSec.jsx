import { SectionHeading, SectionTitle } from "./common/Common"

const BestExperienceSec = () => {
    return (
        <section className="px-6 bg-black rounded-xl">
            <div className="container py-[77px]">
                <SectionTitle className='text-white after:bg-white before:bg-white' title='THE BEST EXPERIENCE' />
                <SectionHeading className='pt-4 text-center text-white' headingBoldLeft='Know' headingLight='More Through' headingBoldRight='Videos' />
            </div>
        </section>
    )
}

export default BestExperienceSec
