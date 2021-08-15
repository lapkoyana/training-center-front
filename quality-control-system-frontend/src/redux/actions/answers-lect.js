import LectionsService from "../../services/LectionsService"
import { SET_ANSWERS, SET_USERS, SET_LECTIONS } from "../type"

export const setLections = () => (dispatch) => {
    return LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_LECTIONS,
            lections: data
        })
    )
};

export const setAnswers = () => (dispatch) => {
    return LectionsService.getAnswers()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_ANSWERS,
                answers: data
            })
        )
}

export const setUsers = () => (dispatch) => {
    return LectionsService.getStudents()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_USERS,
                users: data
            })
        )
}