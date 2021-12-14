import React,{useState} from 'react'
import Container from '../Components/Container'
import Loader from '../Components/Loader';
import Login from "../Components/Login";
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
