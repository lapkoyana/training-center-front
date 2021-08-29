import { LectionsType, AnswersType, UsersType } from "../constants/index";
import { SET_ANSWERS, SET_LECTIONS, SET_USERS } from "../constants/index";

export const setLections = (lections: Array<LectionsType>) => {
    return {
        type: SET_LECTIONS,
        lections
    }
};

export const setAnswers = (answers: Array<AnswersType>) => {
    return {
        type: SET_ANSWERS,
        answers
    }
};

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users
    }
};

// export const setLections = () => async (dispatch: Dispatch<SetLectionsType>) => {
//     return await LectionsService.getLessons()
//     .then(response => response.json())
//     .then(data => 
//         dispatch(setLectionsAction(data))
//     )
// };

// export const setAnswers = () => async (dispatch: Dispatch<SetAnswersType>) => {
//     return await LectionsService.getAnswers()
//         .then(response => response.json())
//         .then(data => 
//             dispatch(setAnswersAction(data))
//         )
// }



// export const setUsers = () => async (dispatch: Dispatch<SetUsersType>) => {
//     return await LectionsService.getStudents()
//         .then(response => response.json())
//         .then(data => 
//             dispatch(setUsersAction(data))
//         )
// }