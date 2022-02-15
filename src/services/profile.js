import http from "../../src/Utils/axios";

const profileURLs = {
    UPDATE_PROFILE_URL: "users/updateprofile",
    GET_PROFILE_URL: "users/",
}

const getProfile = async (id) =>{
    return await http.get(profileURLs.GET_PROFILE_URL + id)
}
const editProfile = async (payload) =>{
    return await http.post(profileURLs.UPDATE_PROFILE_URL, payload)
}

export { getProfile, editProfile };