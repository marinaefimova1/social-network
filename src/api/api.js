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

    getUserProfile(userId) {
       console.warn("Obsolete method. Use profileAPI.");
       return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return(
            instance.get(`profile/${userId}`)
            .then(response => {
                return (response.data)
            })
        )
    },
    getStatus(userId) {
        return(
            instance.get(`profile/status/${userId}`)
            .then(response => {
                return (response.data)
            })
        )
    },
    updateStatus(status) {
        return(
            instance.put(`profile/status/`, {status: status})
            .then(response => {
                return (response.data)
            })
        )
    }
}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return (response.data)
                })
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return (response.data)
            })
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
            .then(response => {
                return (response.data)
            })
        )
    }

}
