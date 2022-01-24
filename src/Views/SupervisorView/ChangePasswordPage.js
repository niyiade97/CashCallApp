import React,{useState} from 'react';
import Profile from "../../modules/profile/components/Profile"
import ChangePasswordModal from "../../modules/modal/component/ChangePasswordModal";
import AlertModal from '../../modules/modal/component/AlertModal';
import SupervisorDashboardContainer from '../../modules/dashboard/components/SupervisorDashboardContainer';

function ChangePasswordPage() {
    const [ successState, setSuccessState ] = useState(false);
    const [ failedState, setFailedState ] = useState(false);
    
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
        <SupervisorDashboardContainer>
            <div className="w-full">
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
        </SupervisorDashboardContainer>
    )
}

export default ChangePasswordPage;
