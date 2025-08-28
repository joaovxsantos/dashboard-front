import useIsMobile from "../../hooks/isMobile";
import SideBarMobile from "./mobile/SidebarMobile";
import { SideBarDesk } from "./desktop/SidebarDesk";

export default function SideBar() {

    const isMobile = useIsMobile();



    return (
        <div className="side-bar-container">
            {isMobile ? <SideBarMobile /> : <SideBarDesk />}
        </div>
    )
}