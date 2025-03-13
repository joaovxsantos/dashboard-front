import { dataDashBoard } from '../../dataDashBoard'
import { Card } from './Card/Card'



export function CardList() {
    return (
        <>

            {
                dataDashBoard.map((data, index) => {
                    return (    
                        <Card key={index} title={data.title} subtitle={data.subtitle} icon={data.icon} content={data.content} />
                    )
                })
            }

        </>
    )
}