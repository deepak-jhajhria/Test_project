import BtnArrow from '../../assets/images/svg/btnArrow.svg'

export const SectionTitle = (props) => {
    return (
        <div className="flex justify-center">
            <p className={`relative inline-block font-medium text-black uppercase font-Poppins text-sm sm:text-md sectionTitle tracking-[5.1px] ${props.className}`}>{props.title}</p>
        </div>
    )
}
export const SectionHeading = (props) => {
    return (
        <h2 className={` font-Geometric font-bold text-2xxl sm:text-5xl text-black ${props.className}`}>{props.headingBoldLeft} <span className="font-light">{props.headingLight}</span> {props.headingBoldRight}</h2>
    )
}
export const Description = (props) => {
    return (
        <p className={` font-Poppins font-normal text-md text-gray30 ${props.className}`}>{props.description}</p>
    )
}
export const CommonBtn = (props) => {
    return (
        <button className={`flex items-center py-[13px] bg-orangeRed font-Poppins text-md sm:text-lg font-medium text-white border border-white rounded-full px-[26px] ${props.className}`}>{props.btnName}<img src={BtnArrow} alt="btnArrow" /></button>
    )
}
