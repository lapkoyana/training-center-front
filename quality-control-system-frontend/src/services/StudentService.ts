import { StudentAnswersType } from "../constants";
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

    getQuestions(lessonId: number) {
        return fetch(URL + '/' + lessonId + '/questions', {
            headers: authHeader()
        })
    }

    addAnswers(lessonId: number, answers: Array<StudentAnswersType>) {
        return fetch(URL + '/' + lessonId + '/questions', {
            method: 'POST',
            headers: authHeader({'Content-Type': 'application/json'}),
            body: JSON.stringify(answers)
        })
    }

    getLessonFile(filename: string) {
        return fetch(URL + '/files/' + filename, {
            headers: authHeader()
        });
    }
}

export default new StudentService();