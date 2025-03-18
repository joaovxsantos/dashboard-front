import { BoxIcon, HomeIcon, Users, ShoppingBag, ChartLine } from "lucide-react";
import styles from './SideBarDesk.module.scss'
// import { ThemeToggle } from "../../ThemeProvider/ThemeContext";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";

export function SideBarDesk() {
    return (
        <>
            <header className={styles["header-desktop-container"]}>
                <nav>
                    <ul>
                        <li>
                            <BoxIcon className={styles["box-icon"]}/>
                        </li>
                        <li>
                            <HomeIcon />
                        </li>
                        <li>
                            <ShoppingBag />
                        </li>
                        <li>
                            <BoxIcon />
                        </li>
                        <li>
                            <Users />
                        </li>
                        <li>
                            <ChartLine />
                        </li>
                    </ul>
                </nav>
                <DarkModeToggle className={styles["toggle-btn"]}/>
            </header>
        </>
    )
}