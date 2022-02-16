import React from 'react'
import "../style/StatusIndicatorContainer.css";
import { Link } from "react-router-dom"

function StatusIndicator(props) {
    return (
        <Link to={props.path}>
            <div className="status-indicator-wrapper hover:bg-gray-400">
                <i style={{color: props.iconColor}}>{props.icon}</i>
                <p className="font-bold text-md text-base text-white">{props.text}</p>
            </div>
        </Link>
    )
}

export default StatusIndicator
