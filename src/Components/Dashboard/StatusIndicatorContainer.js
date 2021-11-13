import React from 'react'
import StatusIndicator from "../Dashboard/StatusIndicator";
import { IoIosInformationCircle } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { GoCalendar} from 'react-icons/go';

function StatusIndicatorcontainer() {
    return (
        <div className="w-1/4 rounded-3xl h-full border-color7 border mb-10 ml-4 mr-3 mt-3 pt-14">
            <div className="m-auto w-3/4">
                <StatusIndicator icon={<IoCheckmarkCircleSharp />} iconColor="color9" text="Approved Request" />
                <StatusIndicator icon={<IoIosInformationCircle />} iconColor="color10" text="Pending Request" />
                <StatusIndicator icon={<GoCalendar />} iconColor="color11" text="Request History" />
            </div>
        </div>
    )
}

export default StatusIndicatorcontainer;

