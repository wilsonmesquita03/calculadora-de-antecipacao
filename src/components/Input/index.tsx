import InputContainer from "./styles"
import { UseFormRegister, FieldValues } from "react-hook-form"
import Helper from "components/Helper"



interface IInputProps {
    label: string
    id: string
    type: string
    UseFormRegister: UseFormRegister<FieldValues>
    error?: string | undefined
    helper?: string | undefined
}

const Input = ({label, id, UseFormRegister, type, error, helper}: IInputProps) => {

    return (
        <InputContainer>
            <label htmlFor={id}>{label}</label>
            <input type={type} {...UseFormRegister(id)} />
            <Helper error={error} helper={helper}/>

        </InputContainer>
    )
}

export default Input