import React from 'react'
import Spinner from "react-loader-spinner";
import BackDrop from './BackDrop';

function Loader({ color, type }) {
  const handleOnLoad = () =>{
       
  }
    return (
    <>
      <BackDrop onclick={handleOnLoad} indexValue={"40"}/>
      <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transform z-50">
        <Spinner
          type={type}
          color={color}
          height={50}
          width={50}
        />
      </div>
    </>
        
      );
}

export default Loader;
