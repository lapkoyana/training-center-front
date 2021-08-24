import { Dispatch } from 'redux';
import QuestionsService from "../services/QuestionsService"
import { QuestionsType } from './../constants/index'
import { setQuestionsAction, addQuestionsAction, editQuestionsAction, deleteQuestionsAction } from './../constants/index'
import { AddQuestionsType, DeleteQuestionsType, EditQuestionsType, SetQuestionsType } from './../constants/index'


export const setQuestions = (lessonId: number) => (dispatch: Dispatch<SetQuestionsType>) => {
    return QuestionsService.getQuestions(lessonId)
    .then(response => response.json())
    .then(data => 
        dispatch(setQuestionsAction(data))
    )
};

export const addQuestion = (lessonId: number, question: QuestionsType) => (dispatch: Dispatch<AddQuestionsType>) => {
    QuestionsService.addQuestion(lessonId, question)
    dispatch(addQuestionsAction(question))
}

export const updateQuestion = (lessonId: number, question: QuestionsType) => (dispatch: Dispatch<EditQuestionsType>) => {
    QuestionsService.updateQuestion(lessonId, question)
    dispatch(editQuestionsAction(question))
}

export const deleteQuestion = (lessonId: number, questionId: number | undefined) => (dispatch: Dispatch<DeleteQuestionsType>) => {
    QuestionsService.delete(lessonId, questionId)
    dispatch(deleteQuestionsAction(questionId))
}