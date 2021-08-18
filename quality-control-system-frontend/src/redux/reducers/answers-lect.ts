import { SetLectionsType, SetAnswersType, SetUsersType } from './../type';
import { SET_ANSWERS, SET_USERS, SET_LECTIONS } from '../type'
import { LectionsType, UsersType, AnswersType } from '../type'

let initialState = {
    answers: [] as Array<AnswersType>,
    users: [] as Array<UsersType>,
    lections: [] as Array<LectionsType>
};

type InitialStateType = typeof initialState

const lecturerAnswerReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_LECTIONS: {
            return {
                ...state,
                lections: action.lections
            };
        }
        case SET_ANSWERS: {
            return {
                ...state,
                answers: action.answers
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }   
}

type ActionType = SetLectionsType | SetAnswersType | SetUsersType

export default lecturerAnswerReducer;