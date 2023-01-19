import Background from "components/Background"
import ValuesProvider from "contexts/ValuesContext"
import Calculator from "components/Calculator"

const Home = () => {
    return (
        <Background>
            <ValuesProvider>
                <Calculator/>
            </ValuesProvider>
        </Background>
    )
}

export default Home