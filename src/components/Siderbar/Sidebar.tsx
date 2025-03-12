import useIsMobile from "../../hooks/isMobile"
import SideBarMobile from "./mobile/SidebarMobile";
import styles from './Sidebar.module.scss'

export default function SideBar() {

    const isMobile = useIsMobile();

    return (
        <div className={styles["side-bar-container"]}>
            {isMobile? <SideBarMobile /> : 'side desk'}
        </div>
    )
}