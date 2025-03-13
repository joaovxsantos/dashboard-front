import React from "react";
import type { dataDash } from "../../../../types";
import styles from './Card.module.scss'
import { ApexChart } from "../../ApexChart/ApexChart";
import clsx from "clsx"


export function Card({ title, subtitle, icon, content }: dataDash) {

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
                {content ? <h4>
                    {content}
                </h4> :<ApexChart />}
            </div>
        </div>
    )

}