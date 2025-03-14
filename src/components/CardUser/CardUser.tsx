import styles from './CardUser.module.scss'
import { User } from 'lucide-react'

export function CardUser() {

    const users = [
        {
            id: 0,
            name: "Nome do usuário",
            email: "usuario@email.com"
        },
        {
            id: 1,
            name: "Nome do usuário 2",
            email: "usuario2@email.com"
        }
    ]


    return (
        <div className={styles["card-user"]}>

            {users.map(user => (
                <div className={styles["info-user"]} key={user.id}>
                    <User />
                    <div>
                        <h4>{user.name}</h4>
                        <span>{user.email}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}