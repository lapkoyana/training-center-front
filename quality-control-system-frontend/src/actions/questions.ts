import { Dispatch } from 'redux';
import { ActionType } from '../reducers/questions'
import QuestionsService from "../../services/QuestionsService";
import { QuestionsType } from "../type"
import { setQuestionsAction, addQuestionsAction, editQuestionsAction, deleteQuestionsAction } from "../type"


export const setQuestions = (lessonId: number) => (dispatch: Dispatch<ActionType>) => {
    return QuestionsService.getQuestions(lessonId)
    .then(response => response.json())
    .then(data => 
        dispatch(setQuestionsAction(data))
    )
};

export const addQuestion = (lessonId: number, question: QuestionsType) => (dispatch: Dispatch<ActionType>) => {
    QuestionsService.addQuestion(lessonId, question)
    dispatch(addQuestionsAction(question))
}

export const updateQuestion = (lessonId: number, question: QuestionsType) => (dispatch: Dispatch<ActionType>) => {
    QuestionsService.updateQuestion(lessonId, question)
    dispatch(editQuestionsAction(question))
}

export const deleteQuestion = (lessonId: number, questionId: number | undefined) => (dispatch: Dispatch<ActionType>) => {
    QuestionsService.delete(lessonId, questionId)
    dispatch(deleteQuestionsAction(questionId))
}