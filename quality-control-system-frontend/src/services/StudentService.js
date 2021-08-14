import authHeader from "./auth-header";

const URL = "http://localhost:8080/lessons"

class StudentService {
    getLessons() {
        return fetch(URL, {
            headers: authHeader()
        })
    };

    getUserLesson() {
        return fetch(URL + '/completeness', {
            headers: authHeader()
        })
    }

    getQuestions(lessonId) {
        return fetch(URL + '/' + lessonId + '/questions', {
            headers: authHeader()
        })
    }

    addAnswers(lessonId, answers) {
        return fetch(URL + '/' + lessonId + '/questions', {
            method: 'POST',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(answers)
        })
    }
}

export default new StudentService();