const URL = "http://localhost:8080/auth/"

class AuthService {
    async login(username: string, password: string) {
        return await fetch(URL + "signin", {
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

    register(username: string, password: string, firstName: string, lastName: string) {
        return fetch(URL + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, firstName, lastName})
        });
    }
}

export default new AuthService();