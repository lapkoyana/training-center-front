import { Dispatch } from 'redux';
import { ActionType } from '../reducers/lesson'
import LectionsService from "../../services/LectionsService";
import { LectionsType,
        setLectionsAction,
        deleteLectionAction,
        editLectionAction,
        addLectionAction,
        setCurrentLectionAction } from '../../constants';


export const setLections = () => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch(setLectionsAction(data))
    )
};

export const setCurrentLection = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.getLesson(id)
        .then(response => response.json())
        .then(data => dispatch(setCurrentLectionAction(data))
    )
};

export const deleteLection = (lectionId: number) => async (dispatch: Dispatch<ActionType>) => {
    return await LectionsService.delete(lectionId)
    .then(() => 
        dispatch(deleteLectionAction(lectionId))
    )
};

export const addOrUpdateLection = (currentMethod: string, formData: any, lection: LectionsType) => (dispatch: Dispatch<ActionType>) => {
    LectionsService.createOrUpdateLesson(currentMethod, formData);
    if (lection.id){
        dispatch(editLectionAction(lection))
    } else {
        dispatch(addLectionAction(lection))
    }
};