import { UserLessonsType, SetUserLessonType, SET_USER_LESSON } from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.userLessons, action: SetUserLessonType): Array<UserLessonsType> => {
    return action.type === SET_USER_LESSON
    ? action.userLessons
    : state
}