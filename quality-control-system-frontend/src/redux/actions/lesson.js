import { ADD_LECTION,
        DELETE_LECTION,
        EDIT_LECTION,
        SET_CURRENT_LECTION,
        SET_LECTIONS } from "../type"


export const setLections = (lections) => ({
    type: SET_LECTIONS, lections})

export const deleteLection = (lectionId) => ({
    type: DELETE_LECTION, lectionId})

export const setCurrentLection = (currentLection) => ({
    type: SET_CURRENT_LECTION, currentLection})

export const addLection = (lection) => ({
    type: ADD_LECTION, lection})

export const editLection = (lection) => ({
    type: EDIT_LECTION, lection})