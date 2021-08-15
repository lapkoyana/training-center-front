import LectionsService from "../../services/LectionsService"
import { SET_ANSWERS, SET_USERS, SET_LECTIONS } from "../type"

export const setLections = () => async (dispatch) => {
    return await LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_LECTIONS,
            lections: data
        })
    )
};

export const setAnswers = () => async (dispatch) => {
    return await LectionsService.getAnswers()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_ANSWERS,
                answers: data
            })
        )
}

export const setUsers = () => async (dispatch) => {
    return await LectionsService.getStudents()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_USERS,
                users: data
            })
        )
}