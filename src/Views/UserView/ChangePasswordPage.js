import React,{useState} from 'react';
import Profile from "../../Components/Dashboard/Profile"
import ChangePasswordModal from '../../Components/Dashboard/ChangePasswordModal';
import BackDrop from '../../Components/BackDrop';
import { useNavigate } from "react-router-dom"
import AlertModal from '../../Components/Dashboard/AlertModal';
import UserDashboardContainer from '../../Components/User/UserDashboardContainer';

function ChangePasswordPage() {
    const [ successState, setSuccessState ] = useState(false);
    const [ failedState, setFailedState ] = useState(false);

    const navigate = useNavigate();
    const handleOnClick = () =>{
       navigate("/profile");
    }
    const handleSubmitButton = () =>{
        setFailedState(true);
    }
    const handleClick = (successState, failedState) =>{
        console.log(successState, failedState)
        setFailedState(failedState);
        setSuccessState(successState);
    }
    const handleBackDropOnClick = () =>{
        setSuccessState(false);
    }

    return (
        <UserDashboardContainer>
            <div className="w-full">
                {/* <BackDrop onclick={handleOnClick}/> */}
                <Profile>
                {
                    !(successState || failedState) &&
                    <ChangePasswordModal handleClick={handleSubmitButton} />
                }
                    
                    {
                        successState &&
                        <AlertModal
                            handleBackDropOnClick={handleBackDropOnClick}
                            messageHeader="Success"
                            messageText1="Successful Password reset!"
                            messageText2="You can now use your new password"
                            btnText="DashBoard"
                            handleClick={handleClick}
                            btnText2="Cancel"
                            btnActive={true}
                        />
                    }
                    {
                        failedState && 
                        <AlertModal
                            handleBackDropOnClick={handleBackDropOnClick}
                            messageHeader="Not successful"
                            messageText1="Password reset wasn’t successful!"
                            messageText2="You can now use your new password"
                            btnText="Try Again!"
                            handleClick={handleClick}
                            btnText2="Cancel"
                            btnActive={true}
                        />
                    }
                    
                </Profile>
            </div>
        </UserDashboardContainer>
    )
}

export default ChangePasswordPage;
