import {Dispatch} from 'redux';
import { ActionType } from '../reducers/student'
import StudentService from "../../services/StudentService";
import { StudentAnswersType } from '../../constants';
import { addAnswersAction, setUserLessonAction, setLectionsAction, setFileAction } from '../../constants';

export const setLections = () => async (dispatch: Dispatch<ActionType>) => {
    return await StudentService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch(setLectionsAction(data))
    )
};

export const setUserLesson = () => async (dispatch: Dispatch<ActionType>) => {
    return await StudentService.getUserLesson()
        .then(response => response.json())
        .then(data => 
            dispatch(setUserLessonAction(data))
        )
}

export const addAnswers = (lessonId: number, answers: Array<StudentAnswersType>) => (dispatch: Dispatch<ActionType>) => {
    StudentService.addAnswers(lessonId, answers);
    dispatch(addAnswersAction(answers))
}

export const getLessonFile = (filename: string | undefined) => async (dispatch: Dispatch<ActionType>) => {
    return await StudentService.getLessonFile(filename)
        .then(response => response.blob())
        .then(blob => 
            dispatch(setFileAction(URL.createObjectURL(blob)))
        )
}