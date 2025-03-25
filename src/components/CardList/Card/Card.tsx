import React, { useEffect, useState } from "react";
import type { dataDash, Order, User } from "../../../../types";
import styles from './Card.module.scss';
import { ApexChart } from "../../ApexChart/ApexChart";
import clsx from "clsx";
import { CardUser } from "../../CardUser/CardUser";


export function Card({ title, subtitle, icon, content, index }: dataDash) {
    const [contentRequest, setContentRequest] = useState<User[] | Order[] | string>("Carregando...");

    useEffect(() => {
        const getContent = async () => {
            if (typeof content === "function") {
                const data = await content({} as User);
                setContentRequest(Array.isArray(data) ? data : [data])
            } else {
                if (content) {
                    setContentRequest(content);
                }
            }
        };
        getContent();
    }, [content]);

    return (
        <div className={clsx(styles["card-container"], !content && styles.graph)}>
            <div className={styles["card-head"]}>
                <div className={styles["head-titles"]}>
                    <h3>{title}</h3>
                    <span>{subtitle}</span>
                </div>
                {React.createElement(icon)}
            </div>
            <div className={styles["card-content"]}>
                {content ?
                    index !== 0 && index !== 5 ?
                        contentRequest.length
                        : index === 0 ?
                            Array.isArray(contentRequest) ? contentRequest.filter((content): content is Order => 'sale' in content && content.sale).length : 0 :
                            <CardUser users={contentRequest} /> : <ApexChart />
                }
            </div>
        </div>
    )
}