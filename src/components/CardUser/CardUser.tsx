import styles from './CardUser.module.scss'
import type { User } from '../../../types'
import { UserIcon } from 'lucide-react'

interface CardUsersProps {
    users: string | object
}

export function CardUser({ users }: CardUsersProps) {
    return (
        <div className={styles["card-user"]}>
            {
                Array.isArray(users) ? users.map((user: User) => (
                    <div className={styles["info-user"]} key={user.id}>
                        <UserIcon />
                        <div>
                            <h4>{user.name}</h4>
                            <span>{user.email}</span>
                        </div>
                    </div>
                )) : 'No users available'
            }
        </div>
    )
}