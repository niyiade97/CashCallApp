
const addComma = (value) =>{
    let tempValue = ""
    let tempArr = value.toString().split(",");
        if(tempArr.length > 1){
            for(let i=0; i<tempArr.length; i++){
                tempValue += tempArr[i];
            }
        }
        else{
            tempValue = tempArr[0];
        } 
        return parseInt(tempValue).toLocaleString('en-US');
}

export default addComma;