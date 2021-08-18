import StudentService from "../../services/StudentService";
import { StudentAnswersType } from './../type';
import { addAnswersAction, setUserLessonAction, setLectionsAction, setFileAction, setQuestionsAction } from './../type';

export const setLections = () => async (dispatch: any) => {
    return await StudentService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch(setLectionsAction(data))
    )
};

export const setUserLesson = () => async (dispatch: any) => {
    return await StudentService.getUserLesson()
        .then(response => response.json())
        .then(data => 
            dispatch(setUserLessonAction(data))
        )
}

export const setQuestions = (lessonId: number) => async (dispatch: any) => {
    return await StudentService.getQuestions(lessonId)
        .then(response => response.json())
        .then(data => 
            dispatch(setQuestionsAction(data))
        )
}

export const addAnswers = (lessonId: number, answers: Array<StudentAnswersType>) => (dispatch: any) => {
    StudentService.addAnswers(lessonId, answers);
    dispatch(addAnswersAction(answers))
}

export const getLessonFile = (filename: string | undefined) => async (dispatch: any) => {
    return await StudentService.getLessonFile(filename)
        .then(response => response.blob())
        .then(blob => 
            dispatch(setFileAction(URL.createObjectURL(blob)))
        )
}