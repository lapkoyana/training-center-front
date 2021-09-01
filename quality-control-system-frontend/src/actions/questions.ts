import { SET_QUESTIONS, QuestionsType } from './../constants/index'


export const setQuestions = (questions: Array<QuestionsType>) => {
    return {
        type: SET_QUESTIONS,
        questions
    }
}