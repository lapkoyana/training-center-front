import {Dispatch} from 'redux';
import LectionsService from "../../services/LectionsService"
import { SET_USERS, SET_LECTIONS } from "../type"
import { setAnswersAction } from '../type';
import { ActionType } from '../reducers/answers-lect'

export const setLections = () => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_LECTIONS,
            lections: data
        })
    )
};

export const setAnswers = () => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.getAnswers()
        .then(response => response.json())
        .then(data => 
            dispatch(setAnswersAction(data))
        )
}

export const setUsers = () => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.getStudents()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_USERS,
                users: data
            })
        )
}