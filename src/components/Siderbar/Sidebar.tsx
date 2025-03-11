import useIsMobile from "../../hooks/isMobile"
import SideBarMobile from "./SidebarMobile";
import styles from './Sidebar.module.scss'

export default function SideBar() {

    const isMobile = useIsMobile();

    return (
        <div className={styles["side-bar-container"]}>
            <SideBarMobile />
        </div>
        // <div className="side-bar-container">
        //         {/* {isMobile? 'aaa' : 'bbb'}
        //         <div className="side-bar-top">

        //         </div>
        //         <div className="side-bar-bottom">

        //         </div> */}
        // </div>
    )
}