import * as yup from "yup"

export const receiptSchema = yup.object().shape({
    amount: yup.number().test("equalTo", "Deve ser maior ou igual R$ 10", (value) => value! >= 1000).required("Campo obrigatório").transform((value) => value * 100),
    installments: yup.number().min(1, "Deve ser maior ou igual a 1").required("Campo obrigatório").integer("Deve ser um valor inteiro").max(12, "Máximo de 12 parcelas").typeError("Deve ser um número"),
    mdr: yup.number().max(100, "Deve ser menor ou igual a 100").required("Campo obrigatório").typeError("Deve ser um número")
})