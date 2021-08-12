import {SET_QUESTIONS,
    DELETE_QUESTIONS,
    ADD_QUESTIONS,
    EDIT_QUESTIONS} from './../type'


let initialState = {
    questions: []
};

const questionReducer = (state = initialState, action) => {
switch (action.type) {
    case SET_QUESTIONS: {
        return {
            ...state,
            questions: action.questions
        };
    }
    case DELETE_QUESTIONS: {
        return {
            ...state,
            questions: state.questions.filter(l => l.id !== action.questionId)
        }
    }
    case ADD_QUESTIONS: {
        return {
            ...state,
            questions: [...state.questions, action.question],
        }
    }
    case EDIT_QUESTIONS: {
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

export default questionReducer;