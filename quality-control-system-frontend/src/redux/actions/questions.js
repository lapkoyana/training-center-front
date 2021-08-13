import QuestionsService from "../../services/QuestionsService";
import { ADD_QUESTION, SET_QUESTIONS, DELETE_QUESTION, EDIT_QUESTION } from "../type"


export const setQuestions = (lessonId) => (dispatch) => {
    return QuestionsService.getQuestions(lessonId)
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_QUESTIONS,
            questions: data
        })
    )
};

export const addQuestion = (lessonId, question) => (dispatch) => {
    QuestionsService.addQuestion(lessonId, question)
    dispatch({
        type: ADD_QUESTION,
        question
    })
}

export const updateQuestion = (lessonId, question) => (dispatch) => {
    QuestionsService.updateQuestion(lessonId, question);
    dispatch({
        type: EDIT_QUESTION,
        question
    })
}

export const deleteQuestion = (lessonId, questionId) => (dispatch) => {
    QuestionsService.delete(lessonId, questionId);
    dispatch({
        type: DELETE_QUESTION,
        questionId
    })
}