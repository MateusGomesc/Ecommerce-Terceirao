import Input from "../forms/Input";
import ButtonBackground from "../layout/ButtonBackground";
import { Title } from "../layout/Title.style";
import { InputContainer } from "../forms/FormContainer.style";


export default function Register(){
    return(
        <>
            <Title
                fontSize={24}
                fontWeight='bold'
            >
                Cadastre-se:
            </Title>
        </>
    )
}