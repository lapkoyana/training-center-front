import { DeleteLectionType, LectionsType, SetLectionsType, AddLectionType, EditLectionType, SetCurrentLectionType } from './../type';
import {SET_LECTIONS,
        DELETE_LECTION,
        ADD_LECTION,
        EDIT_LECTION,
        SET_CURRENT_LECTION } from '../type'


let initialState = {
    lections: [] as Array<LectionsType>,
    currentLection: {} as LectionsType
};

type InitialStateType = typeof initialState

const lectionReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_LECTIONS: {
            return {
                ...state,
                lections: action.lections
            };
        }
        case DELETE_LECTION: {
            return {
                ...state,
                lections: state.lections.filter(l => l.id !== action.lectionId)
            }
        }
        case ADD_LECTION: {
            return {
                ...state,
                lections: [...state.lections, action.lection]
            }
        }
        case EDIT_LECTION: {
            return {
                ...state,
                lections: state.lections.map(l => {
                    if (l.id === action.lection.id){
                        return action.lection;
                    }
                    return l;
                }),
                currentLection: {
                    id: 0,
                    topic: '',
                    dateOfClass: '',
                    lectureFile: '',
                    signOfCompleteness: false
                }
            }
        }
        case SET_CURRENT_LECTION: {
            return {
                ...state,
                currentLection: action.lection
            }
        }
        default:
            return state;
    }
}

export type ActionType = SetLectionsType | DeleteLectionType | AddLectionType | EditLectionType | SetCurrentLectionType

export default lectionReducer;