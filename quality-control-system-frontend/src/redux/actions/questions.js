import QuestionsService from "../../services/QuestionsService";
import { ADD_QUESTIONS, SET_QUESTIONS } from "../type"


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
        type: ADD_QUESTIONS,
        question
    })
}