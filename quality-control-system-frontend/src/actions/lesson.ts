import { Dispatch } from 'redux'
import LectionsService from "../services/LectionsService"
import { LectionsType,
        setLectionsAction,
        deleteLectionAction,
        editLectionAction,
        addLectionAction,
        setCurrentLectionAction } from './../constants/index'

import { AddLectionType,
        EditLectionType,
        SetCurrentLectionType,
        DeleteLectionType,
        SetLectionsType } from './../constants/index'


// export const setLections = () => async (dispatch: Dispatch<SetLectionsType>) => {
//     return await LectionsService.getLessons()
//     .then(response => response.json())
//     .then(data => 
//         dispatch(setLectionsAction(data))
//     )
// };

export const setLections = (lections: Array<LectionsType>) => {
    return setLectionsAction(lections)
};

export const setCurrentLection = (lection: LectionsType) => {
    return setCurrentLectionAction(lection)
}

// export const setCurrentLection = (id: number) => async (dispatch: Dispatch<SetCurrentLectionType>) => {
//     return await LectionsService.getLesson(id)
//         .then(response => response.json())
//         .then(data => dispatch(setCurrentLectionAction(data))
//     )
// };

export const deleteLection = (lectionId: number) => async (dispatch: Dispatch<DeleteLectionType>) => {
    return await LectionsService.delete(lectionId)
    .then(() => 
        dispatch(deleteLectionAction(lectionId))
    )
};

export const addOrUpdateLection = (currentMethod: string, formData: any, lection: LectionsType) => 
                                  (dispatch: Dispatch< AddLectionType | EditLectionType >) => {
    LectionsService.createOrUpdateLesson(currentMethod, formData);
    if (lection.id){
        dispatch(editLectionAction(lection))
    } else {
        dispatch(addLectionAction(lection))
    }
};