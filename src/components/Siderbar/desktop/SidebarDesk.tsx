import { BoxIcon, HomeIcon, Users, ShoppingBag, ChartLine } from "lucide-react";
import styles from './SideBarDesk.module.scss'
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";

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
                {/* <Settings className={styles["settings-icon"]} /> */}
                <ThemeToggle/>
            </header>
        </>
    )
}