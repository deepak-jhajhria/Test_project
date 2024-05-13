import { navLinkData } from "./common/Helper";
import { useOverflowHidden } from "./common/Hooks";

const NavBar = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <div>
            <ul className={`${isOpen ? "right-0" : "-right-full"}`}>
                {
                    navLinkData.map((item, index) => (
                        <li key={index}>
                            <a className="" href={item.pathUrl} onClick={() => setOpen(false)}>{item.linkName}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NavBar
