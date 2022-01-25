import React,{useState} from 'react'
import Container from '../modules/customElement/component/Container';
import Loader from "../modules/customElement/component/Loader";
import Login from "../modules/authentication/components/Login";
function LoginPage() {
    const [ loading, setLoading ] = useState(false);
    const handleOnLoad = (state) =>{
        setLoading(state);
    }
    
    return (
       <Container>
            <Login onLoad={handleOnLoad}>
            {
                loading &&
                <Loader color="#FFFFFF" />
            }
            </Login>
       </Container>
    )
}

export default LoginPage
