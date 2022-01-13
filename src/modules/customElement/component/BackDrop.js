import React from 'react'

function BackDrop({onclick, indexValue}) {
    const handleOnClick = () =>{
       onclick();
    }
    return (
        <div className={`fixed top-0 w-full h-full bg-black opacity-50 z-${indexValue}`} onClick={handleOnClick}>
        </div>
    )
}

export default BackDrop;
