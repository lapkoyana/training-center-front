import authHeader from "./auth-header";

const URL = "http://localhost:8080/lections/"

class QuestionService {
    getQuestions(lessonId) {
        return fetch(URL + lessonId + '/questions', {
            headers: authHeader()
        })
    };

    addQuestion(lessonId, question) {
        return fetch(URL + lessonId + '/questions', {
            method: 'POST',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(question)
        })
    }

    updateQuestion(lessonId, question) {
        return fetch(URL + lessonId + '/questions', {
            method: 'PUT',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(question)
        })
    }

    delete(lessonId, questionId) {
        return fetch(URL + lessonId + '/questions/' + questionId, {
            method: 'DELETE',
            headers: authHeader()
        })
    }
}

export default new QuestionService();