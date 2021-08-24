import {Dispatch} from 'redux';
import StudentService from "../services/StudentService"
import { StudentAnswersType } from './../constants/index'
import { addAnswersAction, setUserLessonAction, setLectionsAction, setFileAction } from './../constants/index'
import { AddAnswersType, SetFileType, SetLectionsType, SetUserLessonType } from './../constants/index'

export const setLections = () => async (dispatch: Dispatch<SetLectionsType>) => {
    return await StudentService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch(setLectionsAction(data))
    )
};

export const setUserLesson = () => async (dispatch: Dispatch<SetUserLessonType>) => {
    return await StudentService.getUserLesson()
        .then(response => response.json())
        .then(data => 
            dispatch(setUserLessonAction(data))
        )
}

export const addAnswers = (lessonId: number, answers: Array<StudentAnswersType>) => (dispatch: Dispatch<AddAnswersType>) => {
    StudentService.addAnswers(lessonId, answers);
    dispatch(addAnswersAction(answers))
}

export const getLessonFile = (filename: string | undefined) => async (dispatch: Dispatch<SetFileType>) => {
    return await StudentService.getLessonFile(filename)
        .then(response => response.blob())
        .then(blob => 
            dispatch(setFileAction(URL.createObjectURL(blob)))
        )
}