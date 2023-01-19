import { CalculatorContainer } from "./styles"
import Form from "components/Form"
import Values from "components/Values"

const Calculator = () => {
    return (
        <CalculatorContainer>
            <Form/>
            <Values/>
        </CalculatorContainer>
    )
}

export default Calculator