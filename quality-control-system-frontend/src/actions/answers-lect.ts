import {Dispatch} from 'redux';
import LectionsService from "../services/LectionsService"
import { SET_USERS, SET_LECTIONS } from "../constants/index"
import { setAnswersAction } from "../constants/index";
import { SetLectionsType, SetAnswersType, SetUsersType } from './../constants/index'

export const setLections = () => async (dispatch: Dispatch<SetLectionsType>) => {
    return await LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_LECTIONS,
            lections: data
        })
    )
};

export const setAnswers = () => async (dispatch: Dispatch<SetAnswersType>) => {
    return await LectionsService.getAnswers()
        .then(response => response.json())
        .then(data => 
            dispatch(setAnswersAction(data))
        )
}

export const setUsers = () => async (dispatch: Dispatch<SetUsersType>) => {
    return await LectionsService.getStudents()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_USERS,
                users: data
            })
        )
}