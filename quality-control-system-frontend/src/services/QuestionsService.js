import authHeader from "./auth-header";

class QuestionService {
    getQuestions(lessonId) {
        return fetch('http://localhost:8080/lections/' + lessonId + '/questions', {
            headers: authHeader()
        })
    };

    // // на бэке еще этот метод надо будет сделать
    // getQuestion(lessonId, questionId) {
    //     return fetch('http://localhost:8080/lections/' + lessonId + '/questions/' + questionId, {
    //             headers: authHeader()
    //         })
    // }

    // // разделить скорее всего
    // createOrUpdateLesson(lessonId, currentMethod, formData) {
    //     return fetch('http://localhost:8080/lections' + lessonId + '/questions', {
    //         method: currentMethod,
    //         headers: authHeader(),
    //         body: formData, // точно не formData
    //     });
    // }

    // delete(lessonId, questionId) {
    //     return fetch('http://localhost:8080/lections/' + lessonId + '/questions/' + questionId, {
    //         method: 'DELETE',
    //         headers: authHeader()
    //     })
    // }
}

export default new QuestionService();