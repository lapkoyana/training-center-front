const SET_LECTIONS = 'SET-LECTIONS';
const DELETE_LECTION = 'DELETE-LECTIONS';
const SET_CURRENT_LECTION = 'SET-CURRENT-LECTION'
const ADD_LECTION = 'ADD-LECTION'
const EDIT_LECTION = 'EDIT-LECTION'


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

export const setLections = (lections) => ({type: SET_LECTIONS, lections})
export const deleteLection = (lectionId) => ({type: DELETE_LECTION, lectionId})
export const setCurrentLection = (currentLection) => ({type: SET_CURRENT_LECTION, currentLection})
export const addLection = (lection) => ({type: ADD_LECTION, lection})
export const editLection = (lection) => ({type: EDIT_LECTION, lection})



export default lectionReducer;