import React from 'react';
import DashboardContainer from '../../Components/Dashboard/DashboardContainer';
import Department from '../../Components/User/Departments';

function DepartmentPage(props) {
    return (
        <DashboardContainer>
            <div className="w-full flex">
                <Department />
            </div>
        </DashboardContainer>
    )
}

export default DepartmentPage;
