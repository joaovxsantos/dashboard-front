import { BoxIcon, HomeIcon, Users, ChartLine, ShoppingBag, Settings } from "lucide-react"


export default function SideBarMobile() {
    return (
        <nav>
            <ul>
                <li>
                    <BoxIcon color="#fff" size={22}/>

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
    )
}