export const SectionTitle = (props) => {
    return (
        <div className="flex justify-center">
            <p className="relative inline-block font-medium text-black uppercase font-Poppins text-md sectionTitle tracking-[5.1px]">{props.title}</p>
        </div>
    )
}
export const SectionHeading = (props) => {
    return (
        <h2 className={` font-Geometric font-bold text-5xl text-black ${props.className}`}>{props.headingBoldLeft} <span className="font-light">{props.headingLight}</span> {props.headingBoldRight}</h2>
    )
}
export const Description = (props) => {
    return (
        <p className={` font-Poppins font-normal text-md text-gray30 ${props.className}`}>{props.description}</p>
    )
}
