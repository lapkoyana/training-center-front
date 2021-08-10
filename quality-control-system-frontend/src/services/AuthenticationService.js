const API_URL = "http://localhost:8080/auth/"

class AuthService {
    async login(username, password) {
        return await fetch(API_URL + "signin", {
            method: 'POST',
            body: {username, password}
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return await response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    //ну это тоже async, наверное
    async register(username, password) {
        return await fetch(API_URL + "signup", {
            method: 'POST',
            body: {username, password}
        });
    }
}

export default new AuthService();