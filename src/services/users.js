import http from "../../src/Utils/axios";

const userURLs = {
    CREATE_USER_URL: "users/adduser",
    DELETE_USER_URL: "users/delete/",
    GET_USER_URL: "users/getallusers",
}

const createUser = async (payload) =>{
    return await http.post(userURLs.CREATE_USER_URL, payload)
}
const getUser = async () =>{
    return await http.get(userURLs.GET_USER_URL)
}
const deleteUser = async (query) =>{
    return await http.post(userURLs.DELETE_USER_URL + query)
}

export { createUser, deleteUser, getUser };