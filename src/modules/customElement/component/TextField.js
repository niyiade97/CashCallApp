import React from 'react'

function TextField({label, onChange, disabled, placeholder, name, type, width, value, formError}) {
   
    
    const handleOnchange = (e) =>{
        let tempValue = ""
        const {name, value} = e.target;
        var _value = value;
        if(name === "amount" && value !== ""){
            if(!isNaN(parseInt(value))){
                let tempArr = value.toString().split(",");
            
                if(tempArr.length > 1){
                    for(let i=0; i<tempArr.length; i++){
                        tempValue += tempArr[i];
                    }
                }
                else{
                    tempValue = tempArr[0];
                } 
                _value = parseInt(tempValue).toLocaleString('en-US');
            }
            else{
                _value = "";
            }
            
           
        }
        else if(type === "number") {
            _value = parseInt(value);
        }
        e.preventDefault();
        onChange(name, _value);
    }
    return (
        <div className={`w-${width} px-4 py-3`}>
            <div style={{color:"#8E8EA1"}} className="w-full">
                <label className="font-normal text-lg">{label}</label> 
                <input className={`rounded-full w-full mt-4 h-14 px-4 font-semibold ${formError ? " border border-red-400" :"border-2 border-color5 text-color13 placeholder-color4" } ${disabled ? "bg-blue-50" : "bg-white"}`} type={type} name={name} value={value}  onChange={handleOnchange} disabled={disabled} autoComplete="off"/>
                {
                    formError &&
                    <p className="text-left text-red-500 pt-3 pl-3">{formError}</p>
                }
            </div>
        </div>
        
    )
}

export default TextField
