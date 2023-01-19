import axios from "axios"
import { IReceipt } from "contexts/ValuesContext"

export interface IHandleValuesProps {
    amount: number
    installments: number
    mdr: number
    days: number[] | undefined
}

const api = axios.create(
    {
        timeout: 5000, 
        baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"
    }
)

export const handleValues = async (valuesData: IHandleValuesProps) => {
    valuesData.days = [1, 15, 30, 60, 90]

    const { data } = await api.post<IReceipt>("", valuesData)

    return data
}

