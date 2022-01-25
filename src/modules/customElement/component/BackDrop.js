import React from 'react'

function BackDrop({ indexValue}) {
  
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-${indexValue}`}>
        </div>
    )
}

export default BackDrop;
