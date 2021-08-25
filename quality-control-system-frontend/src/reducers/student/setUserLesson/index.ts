import { UserLessonsType, LectionsType, SetUserLessonType, SET_USER_LESSON } from '../../../constants'
import { initialState } from './../../../constants/index';

// type InitialStateType = {
//     userLessons: Array<UserLessonsType>,
//     lections: Array<LectionsType>,
// };

// let initialState: InitialStateType = {
//     userLessons: [],
//     lections: [],
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.userLessons, action: SetUserLessonType): InitialStateType => {
    //тут все пересмотретьпересмотретьпересмотретьпересмотретьпересмотретьпересмотреть
    return action.type === SET_USER_LESSON
    ? {
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
    : state
}