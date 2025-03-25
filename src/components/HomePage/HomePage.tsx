import styles from './HomePage.module.scss'
import SideBar from '../Siderbar/Sidebar'
import { CardList } from '../CardList/CardList'
import { ThemeProvider } from '../ThemeProvider/ThemeContext'

export function HomePage() {
    return (
        <ThemeProvider>
            <SideBar />
            <main className={styles["main-container"]}>
                <CardList />
            </main>
        </ThemeProvider>
    )
}