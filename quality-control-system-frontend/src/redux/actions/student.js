import StudentService from "../../services/StudentService";
import { SET_LESSONS, SET_USER_LESSON, SET_QUESTIONS, ADD_ANSWERS, SET_FILE } from "../type"

export const setLections = () => (dispatch) => {
    return StudentService.getLessons()
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: SET_LESSONS,
            lessons: data
        })
    )
};

export const setUserLesson = () => (dispatch) => {
    return StudentService.getUserLesson()
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_USER_LESSON,
                userLessons: data
            })
        )
}

export const setQuestions = (lessonId) => (dispatch) => {
    return StudentService.getQuestions(lessonId)
        .then(response => response.json())
        .then(data => 
            dispatch({
                type: SET_QUESTIONS,
                questions: data
            })
        )
}

export const addAnswers = (lessonId, answers) => (dispatch) => {
    StudentService.addAnswers(lessonId, answers);
    dispatch({
        type: ADD_ANSWERS,
        answers
    })
}

export const getLessonFile = (filename) => async (dispatch) => {
    return await StudentService.getLessonFile(filename)
        .then(response => response.blob())
        .then(data => 
            dispatch({
                type: SET_FILE,
                file: data 
            })
        )
}