import http from "../../src/Utils/axios";

const departmentURLs = {
    GET_DEPARTMENT_URL: "department/departments",
    DELETE_DEPARTMENT_URL: "users/",
    CREATE_DEPARTMENT_URL: "department/create"
}

const getDepartment = async () =>{
    return await http.get(departmentURLs.GET_DEPARTMENT_URL)
}
const deleteDepartment = async (id) =>{
    return await http.post(departmentURLs.DELETE_DEPARTMENT_URL + id)
}
const createDepartment = async (payload) =>{
    return await http.post(departmentURLs.CREATE_DEPARTMENT_URL, payload)
}

export { getDepartment, deleteDepartment, createDepartment };