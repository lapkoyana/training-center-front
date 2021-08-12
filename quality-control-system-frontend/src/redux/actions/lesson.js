import LectionsService from "../../services/LectionsService";
import { ADD_LECTION,
        DELETE_LECTION,
        EDIT_LECTION,
        SET_LECTIONS } from "../type"


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

export const setCurrentLection = (id) => () => {
    return LectionsService.getLesson(id)
        .then(response => response.json())
        .then(data => {
            return data;
        });
};

export const deleteLection = (lectionId) => (dispatch) => {
    return LectionsService.delete(lectionId)
    .then(() => 
        dispatch({
            type: DELETE_LECTION,
            lectionId
        })
    )
};

export const addOrUpdateLection = (currentMethod, formData, lection) => (dispatch) => {
    LectionsService.createOrUpdateLesson(currentMethod, formData);
    if (lection.id){
        dispatch({
            type: EDIT_LECTION,
            lection
        })
    } else {
        dispatch({
            type: ADD_LECTION,
            lection
        })
    }
};