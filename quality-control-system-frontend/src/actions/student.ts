import { SET_ANSWERS, StudentAnswersType, UserLessonsType } from './../constants/index'
import { SET_USER_LESSON, SET_FILE } from './../constants/index'

export const setUserLesson = (userLessons: Array<UserLessonsType>) => {
    return {
        type: SET_USER_LESSON,
        userLessons
    }
} 

export const setLessonFile = (file: string | undefined) => {
    return {
        type: SET_FILE,
        file
    }
}

export const setAnswers = (answers: Array<StudentAnswersType>) => {
    return {
        type: SET_ANSWERS,
        answers
    }
}