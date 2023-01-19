import { IValuesCardContainer } from "./styles"

interface IValuesCard {
    day: string
    value: number
}

const ValuesCard = ({day, value}: IValuesCard) => {
    if (day === "1"){
        return (
            <IValuesCardContainer>
                <p>Amanhã:</p>
                <span>{(value / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </IValuesCardContainer>
        )
    }

    return (
        <IValuesCardContainer>
            <p>Em {day} dias:</p>
            <span>{(value / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </IValuesCardContainer>
    )
}

export default ValuesCard