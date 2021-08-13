const URL = "http://localhost:8080/auth/"

class AuthService {
    login(username, password) {
        return fetch(URL + "signin", {
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
        return fetch(URL + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
    }
}

export default new AuthService();