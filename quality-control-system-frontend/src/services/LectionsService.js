import authHeader from "./auth-header";

const URL = "http://localhost:8080/lessons"

class LectionService {
    getLessons() {
        return fetch(URL, {
            headers: authHeader()
        })
    };
}

export default new LectionService();