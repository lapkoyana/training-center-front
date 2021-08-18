import LectionsService from "../../services/LectionsService";
import { LectionsType, setLectionsAction, deleteLectionAction, editLectionAction, addLectionAction } from './../type';


export const setLections = () => async (dispatch: any) => {
    return await LectionsService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch(setLectionsAction(data))
    )
};

export const setCurrentLection = (id: number) => async () => {
    return await LectionsService.getLesson(id)
        .then(response => response.json())
        .then(data => {
            return data;
        });
};

export const deleteLection = (lectionId: number | undefined) => async (dispatch: any) => {
    return await LectionsService.delete(lectionId)
    .then(() => 
        dispatch(deleteLectionAction(lectionId))
    )
};

export const addOrUpdateLection = (currentMethod: string, formData: any, lection: LectionsType) => (dispatch: any) => {
    LectionsService.createOrUpdateLesson(currentMethod, formData);
    if (lection.id){
        dispatch(editLectionAction(lection))
    } else {
        dispatch(addLectionAction(lection))
    }
};