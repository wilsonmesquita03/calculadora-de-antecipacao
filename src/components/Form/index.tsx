import { useForm } from "react-hook-form"
import { useContext } from "react"
import { ValuesContext } from "contexts/ValuesContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormContainer } from "./styles"
import Input from "components/Input"
import { receiptSchema } from "schemas"
import CurrencyInput from "react-currency-input-field"
import Helper from "components/Helper"

const Form = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: yupResolver(receiptSchema)
    })
    const {handleReceipt} = useContext(ValuesContext)

    const beforeSubmit = (data: any) => {
        handleReceipt(data)
    }

    return (
        <FormContainer onSubmit={handleSubmit(beforeSubmit)}>
            <h1>Simule sua antecipação</h1>
            
            <div>
                <label htmlFor="amount">Informe o valor da venda *</label>
                <CurrencyInput prefix="R$" decimalsLimit={2} decimalSeparator={","} onValueChange={(e) => setValue("amount", e && Number(e?.replace(",",".")))}/>
                <Helper error={errors.amount?.message as string} />
            </div>
            <Input UseFormRegister={register} id="installments" label="Em quantas parcelas *" type="text" error={errors.installments?.message as string} helper="Máximo de 12 parcelas" />
            <Input UseFormRegister={register} id="mdr" label="Informe o percentual de MDR *" type="text" error={errors.mdr?.message as string} />
            <button type="submit">Simular</button>
        </FormContainer>
    )
}

export default Form