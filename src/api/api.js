import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "89929463-06ec-41e8-a89f-7752a2627b7d"
    }
});


export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
                .then(response => {
                    return (response.data)
                })
        )
    },

    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => {
                    return (response.data)
                })
        )
    },

    unFollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => {
                    return (response.data)
                })
        )
    },

    authMe() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return (response.data)
                })
        )
    },

    getUserProfile(userId) {
        return(
            instance.get(`profile/${userId}`)
            .then(response => {
                return (response.data)
            })
        )
    }

}

