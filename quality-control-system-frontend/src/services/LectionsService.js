import authHeader from "./auth-header";

const URL = "http://localhost:8080/lections"

class LectionService {
    getLessons() {
        return fetch(URL, {
            headers: authHeader()
        })
    };

    getLesson(id) {
        return fetch(URL + '/' + id, {
                headers: authHeader()
            })
    }

    createOrUpdateLesson(currentMethod, formData) {
        return fetch(URL, {
            method: currentMethod,
            headers: authHeader(),
            body: formData,
        });
    }

    delete(id) {
        return fetch(URL + '/' + id, {
            method: 'DELETE',
            headers: authHeader()
        })
    }

    getAnswers() {
        return fetch(URL + '/answers', {
            headers: authHeader()
        })
    }

    getStudents() {
        return fetch(URL + '/students', {
            headers: authHeader()
        })
    }
}

export default new LectionService();