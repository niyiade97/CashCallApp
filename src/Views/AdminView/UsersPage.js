import React,{useState} from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Users from '../../Components/User/Users';
import BackDrop from "../../Components/BackDrop";
import Loader from '../../Components/Loader';

function UsersPage(props) {
    const [ loading, setLoading ] = useState(false);

    const handleOnLoad = (state) =>{
        setLoading(state)
    }
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Users handleOnLoad={handleOnLoad} >
                {
                    loading &&
                    <>
                        <BackDrop indexValue={"30"}/>
                        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 transform">
                            <Loader color="#163F86"/>
                        </div>
                    </>
                }
                </Users>
            </div>
        </DashboardContainer>
    )
}

export default UsersPage;
