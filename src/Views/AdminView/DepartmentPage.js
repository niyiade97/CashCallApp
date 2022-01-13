import React from 'react';
import DashboardContainer from "../../modules/dashboard/components/DashboardContainer"
import Department from "../../modules/department/component/Departments"

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
