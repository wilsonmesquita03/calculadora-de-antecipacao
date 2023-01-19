import { createContext, ReactNode, useState } from "react";
import { handleValues } from "services";
import { IHandleValuesProps } from "services";


interface IValuesContext {
    handleReceipt: (data: IHandleValuesProps) => void
    receipt: IReceipt
}

interface IValuesProviderProps {
    children: ReactNode
}

export interface IReceipt {
    "1": number
    "15": number
    "60": number
    "90": number
}

export const ValuesContext = createContext({} as IValuesContext)

const ValuesProvider = ({children}: IValuesProviderProps) => {
    const [receipt, setReceipt] = useState<IReceipt>({"1": 0, "15": 0, "60": 0, "90": 0})

    const handleReceipt = async (data: IHandleValuesProps) => {
        const receipt = await handleValues(data)

        setReceipt(receipt)
    }

    return (
        <ValuesContext.Provider value={{handleReceipt, receipt}}>
            {children}
        </ValuesContext.Provider>
    )
}

export default ValuesProvider
