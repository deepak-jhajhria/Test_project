import { BtnArrow } from "./Icons"

export const SectionTitle = (props) => {
    return (
        <div className={`flex justify-center ${props.positionText}`}>
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
        <button className={`flex items-center text-nowrap py-[13px] bg-orangeRed font-Poppins text-md sm:text-lg font-medium text-white border border-white rounded-full px-[26px] ${props.className}`}>{props.btnName} <span className={`${props.arrowClassName}`}><BtnArrow /></span></button>
    )
}
export const Lable = (props) => {
    return (
        <label htmlFor="">{props.text}<span className='text-[#FF0000]'>*</span></label>
    )
}
export const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className={`w-full mt-[10px] rounded-md p-2 text-lg font-light border duration-300  focus:border-orangeRedLight border-lightGrey30 outline-none placeholder:text-gray30 font-Poppins ${props.className}`} />
    )
}
