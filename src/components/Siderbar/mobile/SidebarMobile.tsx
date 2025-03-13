import { BoxIcon, HomeIcon, Users, ShoppingBag, Settings, X, Menu } from "lucide-react";
import { useState } from "react";
import styles from './SidebarMobile.module.scss';
import clsx from "clsx"



export default function SideBarMobile() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className={!isOpen ? styles["header-close"] : undefined}>
            <Menu className={styles["menu-icon"]} style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} />
            <nav className={clsx(styles["nav-sidebar"], isOpen ? styles.isOpen : styles.notIsOpen)}>
                <X style={{ position: "absolute", right: "20px", top: 45, cursor: "pointer" }} onClick={() => setIsOpen(false)} />
                <ul>
                    <li>
                        <BoxIcon color="#fff" size={22} />
                    </li>
                    <li>
                        <HomeIcon />
                        Inicio
                    </li>
                    <li>
                        <ShoppingBag />
                        Pedidos
                    </li>
                    <li>
                        <BoxIcon />
                        Produtos
                    </li>
                    <li>
                        <Users />
                        Clientes
                    </li>
                    <li>
                        <Settings />
                        Configurações</li>
                </ul>
            </nav>
        </header>
    )
}