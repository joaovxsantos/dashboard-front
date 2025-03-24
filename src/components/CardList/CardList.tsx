import { dataDashBoard } from '../../dataDashBoard'
import { Card } from './Card/Card'


export function CardList() {
    return (
        <>

            {
                dataDashBoard.map((data, index) => {
                    return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <Card key={index} index={index} title={data.title} subtitle={data.subtitle} icon={data.icon} content={data.content} />
                    )
                })
            }

        </>
    )
}