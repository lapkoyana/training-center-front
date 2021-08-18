import { DeleteLectionType, LectionsType, SetLectionsType, AddLectionType, EditLectionType } from './../type';
import {SET_LECTIONS,
        DELETE_LECTION,
        ADD_LECTION,
        EDIT_LECTION} from '../type'


let initialState = {
    lections: [] as Array<LectionsType>
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
                })
            }
        }
        default:
            return state;
    }
}

type ActionType = SetLectionsType | DeleteLectionType | AddLectionType | EditLectionType

export default lectionReducer;