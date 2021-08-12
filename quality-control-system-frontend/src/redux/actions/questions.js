import QuestionsService from "../../services/QuestionsService";
import { SET_QUESTIONS } from "../type"


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