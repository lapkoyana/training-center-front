import authHeader from "./auth-header";

class LectionService {
    getLessons() {
        return fetch('http://localhost:8080/lections', {
            headers: authHeader()
        })
    };

    getLesson(id) {
        return fetch('http://localhost:8080/lections/' + id, {
                headers: authHeader()
            })
    }

    createOrUpdateLesson(currentMethod, formData) {
        return fetch('http://localhost:8080/lections', {
            method: currentMethod,
            headers: authHeader(),
            body: formData,
        });
    }

    delete(id) {
        return fetch('http://localhost:8080/lections/' + id, {
            method: 'DELETE',
            headers: authHeader()
        })
    }
}

export default new LectionService();