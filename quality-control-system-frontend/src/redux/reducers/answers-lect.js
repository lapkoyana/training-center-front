import { SET_ANSWERS, SET_USERS, SET_LECTIONS } from './../type'


let initialState = {
    answers: [],
    users: [],
    lections: []
};

const lecturerAnswerReducer = (state = initialState, action) => {
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

export default lecturerAnswerReducer;