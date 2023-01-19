import { ValuesContainer } from "./styles"
import { useContext } from "react"
import { ValuesContext } from "contexts/ValuesContext"
import ValuesCard from "components/ValuesCard"
import { IReceipt } from "contexts/ValuesContext"

const Values = () => {
    const {receipt} = useContext(ValuesContext)
    
    return (
        <ValuesContainer>
            <h1>Você receberá:</h1>
            <ValuesCard day="1" value={receipt[1]} />
            <ValuesCard day="15" value={receipt[15]} />
            <ValuesCard day="60" value={receipt[60]} />
            <ValuesCard day="90" value={receipt[90]} />
        </ValuesContainer>
    )
}

export default Values