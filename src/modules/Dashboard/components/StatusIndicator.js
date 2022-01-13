import React from 'react'
import "../style/StatusIndicatorContainer.css";
function StatusIndicator(props) {
    return (
        <div className="status-indicator-wrapper">
            <i style={{color: props.iconColor}}>{props.icon}</i>
            <p className="font-bold text-md text-white">{props.text}</p>
        </div>
    )
}

export default StatusIndicator
