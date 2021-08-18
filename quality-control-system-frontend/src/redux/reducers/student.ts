import { SetLectionsType, SetUserLessonType, AddAnswersType, SetFileType, SetStudentAnswersType } from './../type';
import {SET_LECTIONS,
        SET_USER_LESSON,
        ADD_ANSWERS,
        SET_ANSWERS,
        SET_FILE } from '../type'

import {StudentAnswersType, LectionsType, UserLessonsType} from '../type'



type InitialStateType = {
    lections: Array<LectionsType>,
    userLessons: Array<UserLessonsType>,
    answers: Array<StudentAnswersType>,
    file: string | undefined
};

let initialState: InitialStateType = {
    lections: [],
    userLessons: [],
    answers: [],
    file: undefined
}

const studentReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
switch (action.type) {
    case SET_LECTIONS: {
        return {
            ...state,
            lections: action.lections
        };
    }
    case SET_USER_LESSON: {
        return {
            ...state,
            userLessons: action.userLessons,
            lections: state.lections.map(lection => {
                lection.completeness = false;
                action.userLessons.forEach(userLesson => {
                    if (lection.id === userLesson['lessonId']){
                        lection.completeness = userLesson['signOfCompleteness'];
                    }
                });
                return lection;
            })
        }
    }
    case ADD_ANSWERS: {
        return {
            ...state,
            answers: action.answers
        }
    }
    case SET_ANSWERS: {
        return {
            ...state,
            answers: action.answers
        }
    }
    case SET_FILE: {
        return {
            ...state,
            file: action.file
        }
    }
    default:
        return state;
    }   
}

type ActionsTypes = SetLectionsType | SetUserLessonType | AddAnswersType | 
                    SetStudentAnswersType | SetFileType

export default studentReducer;