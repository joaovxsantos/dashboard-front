import styles from './HomePage.module.scss'
import SideBar from '../Siderbar/Sidebar'
import { CardList } from '../CardList/CardList'


export function HomePage() {
    return (
        <>
            <SideBar />
            <main className={styles["main-container"]}>
                <CardList />
            </main>
        </>
    )
}