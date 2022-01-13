import React from 'react'
import StatusIndicator from "../Dashboard/StatusIndicator";
import { IoIosInformationCircle } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import "./StatusIndicatorContainer.css";
import { GoCalendar} from 'react-icons/go';

function StatusIndicatorcontainer() {
    return (
        <div className="status-indicator-container">
            <div className="m-auto w-3/4">
                <StatusIndicator icon={<IoCheckmarkCircleSharp />} iconColor="#06AB2B" text="Approved Request" />
                <StatusIndicator icon={<IoIosInformationCircle />} iconColor="#ECF102" text="Pending Request" />
                <StatusIndicator icon={<GoCalendar />} iconColor="#FE8794" text="Request History" />
            </div>
        </div>
    )
}

export default StatusIndicatorcontainer;

