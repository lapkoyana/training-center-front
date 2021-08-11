const API_URL = "http://localhost:8080/auth/"

class AuthService {
    async login(username, password) {
        return await fetch(API_URL + "signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            if (data.accessToken) {
              localStorage.setItem("user", JSON.stringify(data));
            }
    
            return data;
          });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return fetch(API_URL + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
    }
}

export default new AuthService();