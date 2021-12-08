import React from 'react'
import Spinner from "react-loader-spinner";
import BackDrop from './BackDrop';

function Loader({ color, type }) {
  const handleOnLoad = () =>{
       
  }
    return (
    <>
      <BackDrop onclick={handleOnLoad} indexValue={"40"}/>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transform">
        <Spinner
          type={type}
          color={color}
          height={100}
          width={100}
        />
      </div>
    </>
        
      );
}

export default Loader;
