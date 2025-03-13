import React from "react";
import type { dataDash } from "../../../../types";
import styles from './Card.module.scss'

export function Card({ title, subtitle, icon, content }: dataDash) {

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-head"]}>
                <div className={styles["head-titles"]}>
                    <h2>{title}</h2>
                    <span>{subtitle}</span>
                </div>
                {React.createElement(icon)}
            </div>
            <div className={styles["card-content"]}>
                <h3>
                    {content}
                </h3>
            </div>
        </div>
    )

}