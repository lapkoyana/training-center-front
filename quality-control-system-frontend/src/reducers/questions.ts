import { SetQuestionsType, AddQuestionsType, EditQuestionsType, DeleteQuestionsType } from './../type';
import {SET_QUESTIONS,
    DELETE_QUESTION,
    ADD_QUESTION,
    EDIT_QUESTION} from '../type'

import {QuestionsType} from '../type'


let initialState = {
    questions: [] as Array<QuestionsType>
};

type InitialStateType = typeof initialState

const questionReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                questions: action.questions
            };
        }
        case DELETE_QUESTION: {
            return {
                ...state,
                questions: state.questions.filter(l => l.id !== action.questionId)
            }
        }
        case ADD_QUESTION: {
            return {
                ...state,
                questions: [...state.questions, action.question],
            }
        }
        case EDIT_QUESTION: {
            return {
                ...state,
                questions: state.questions.map(l => {
                    if (l.id === action.question.id){
                        return action.question;
                    }
                    return l;
                }),
            }
        }
        default:
            return state;
    }
}

export type ActionType = SetQuestionsType | AddQuestionsType | EditQuestionsType | DeleteQuestionsType

export default questionReducer;