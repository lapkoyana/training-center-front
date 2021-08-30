import authHeader from "./auth-header";

const URL = "http://localhost:8080/lections"

class LectionService {
    getLessons() {
        return fetch(URL, {
            headers: authHeader()
        })
    };

    getLesson(id: number) {
        return fetch(URL + '/' + id, {
                headers: authHeader()
            })
    }

    createOrUpdateLesson(currentMethod: string, formData: any) {
        return fetch(URL, {
            method: currentMethod,
            headers: authHeader(),
            body: formData,
        });
    }

    delete(id: number) {
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