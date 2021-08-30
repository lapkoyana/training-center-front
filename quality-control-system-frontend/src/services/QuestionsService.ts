import { QuestionsType } from "../constants";
import authHeader from "./auth-header";

const URL = "http://localhost:8080/lections/"

class QuestionService {
    getQuestions(lessonId: number) {
        return fetch(URL + lessonId + '/questions', {
            headers: authHeader()
        })
    };

    addQuestion(lessonId: number, question: QuestionsType) {
        return fetch(URL + lessonId + '/questions', {
            method: 'POST',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(question)
        })
    }

    updateQuestion(lessonId: number, question: QuestionsType) {
        return fetch(URL + lessonId + '/questions', {
            method: 'PUT',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(question)
        })
    }

    delete(lessonId: number, questionId: number) {
        return fetch(URL + lessonId + '/questions/' + questionId, {
            method: 'DELETE',
            headers: authHeader()
        })
    }
}

export default new QuestionService();