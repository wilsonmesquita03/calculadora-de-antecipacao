import { SpanStyled, PStyled } from "./styles"

interface IHelperProps {
    helper?: string | undefined
    error: string | undefined
}


const Helper = ({helper, error}: IHelperProps) => {
    return (
        error ? <SpanStyled>{error}</SpanStyled> : helper ? <PStyled>{helper}</PStyled> : <></>
    )
}

export default Helper