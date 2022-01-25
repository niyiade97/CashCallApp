import React,{useState} from 'react'
import Container from "../modules/customElement/component/Container";
import PasswordReset from "../modules/authentication/components/PasswordReset";
import Loader from "../modules/customElement/component/Loader";

function PasswordResetPage() {
    const [ loading, setLoading ] = useState(false);
    const handleOnLoad = (state) =>{
        setLoading(state);
    }
    return (
        <Container>
        <PasswordReset onLoad={handleOnLoad}>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
        </PasswordReset>
        </Container>
    )
}

export default PasswordResetPage;
