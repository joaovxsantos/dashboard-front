import useIsMobile from "../../hooks/isMobile";
import SideBarMobile from "./mobile/SideBarMobile";
import { SideBarDesk } from "./desktop/SideBarDesk";
import styles from './Sidebar.module.scss'

export default function SideBar() {

    const isMobile = useIsMobile();

   

    return (
        <div className={styles["side-bar-container"]}>
            {isMobile ? <SideBarMobile /> : <SideBarDesk />}
        </div>
    )
}