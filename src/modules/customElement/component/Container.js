import React from 'react'
import SidePage from "./SidePage"

function Container(props) {
    return (
        <div className="side-page-wrapper h-screen w-full flex font-sans">
            <div className="side-page-inner-wrapper w-55 h-full">
                <SidePage />
            </div>
        {props.children}
    </div>
    )
}

export default Container
