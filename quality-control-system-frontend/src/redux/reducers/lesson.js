import {SET_LECTIONS,
        DELETE_LECTION,
        SET_CURRENT_LECTION,
        ADD_LECTION,
        EDIT_LECTION} from './../type'


let initialState = {
    lections: [],
    currentLection: {
        topic: '',
        dateOfClass: '',
        lectureFile: null,
        signOfCompleteness: false
    }
};

const lectionReducer = (state = initialState, action) => {
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
        case SET_CURRENT_LECTION: {
            return {
                ...state,
                currentLection: action.currentLection
            }
        }
        case ADD_LECTION: {
            return {
                ...state,
                lections: [...state.lections, action.lection],
                currentLection: {
                    topic: '',
                    dateOfClass: '',
                    lectureFile: undefined,
                    signOfCompleteness: false
                }
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
                    topic: '',
                    dateOfClass: '',
                    lectureFile: undefined,
                    signOfCompleteness: false
                }
            }
        }
        default:
            return state;
    }
}

export default lectionReducer;