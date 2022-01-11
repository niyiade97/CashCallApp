import React,{useState} from 'react'
import Container from '../Components/Container'
import PasswordReset from '../Components/User/ResetPassword/PasswordReset'
import Loader from '../Components/Loader';

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
