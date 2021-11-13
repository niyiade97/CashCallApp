import React from 'react'
import SidePage from './SidePage';

function Container(props) {
    return (
        <div className="h-screen w-full flex font-sans">
        <div className="w-55 h-full">
            <SidePage />
        </div>
        {props.children}
    </div>
    )
}

export default Container
