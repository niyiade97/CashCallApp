import React from 'react'

function StatusIndicator(props) {
    return (
        <div className="w-full rounded-lg bg-color8 flex justify-evenly items-center py-3 px-5 my-3 shadow-btnShadow">
            <i className={`text-${props.iconColor}`}>{props.icon}</i>
            <p className="font-bold text-md text-white">{props.text}</p>
        </div>
    )
}

export default StatusIndicator
