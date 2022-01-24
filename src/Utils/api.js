import axios from "axios"

const adminToken = localStorage.getItem("adminToken");
const userToken = localStorage.getItem("userToken");
const superToken = localStorage.getItem("superToken");

const addToken = () =>{
    if(adminToken){
        return adminToken;
    }
    else if(superToken){
        return superToken;
    }
    else{
        return userToken;
    }
}
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {'Authorization': 'Bearer '+ addToken()} 
})