import {SET_LESSONS,
        SET_USER_LESSON,
        ADD_ANSWERS,
        SET_ANSWERS } from './../type'


let initialState = {
    lessons: [],
    userLessons: [],
    answers: []
};

const studentReducer = (state = initialState, action) => {
switch (action.type) {
    case SET_LESSONS: {
        return {
            ...state,
            lessons: action.lessons
        };
    }
    case SET_USER_LESSON: {
        return {
            ...state,
            userLessons: action.userLessons,
            lessons: state.lessons.map(lesson => {
                lesson.completeness = false;
                action.userLessons.forEach(userLesson => {
                    if (lesson.id === userLesson['lessonId']){
                        lesson.completeness = userLesson['signOfCompleteness'];
                    }
                });
                return lesson;
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
    default:
        return state;
    }   
}

export default studentReducer;