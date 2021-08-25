import { LectionsType, SetLectionsType, SET_LECTIONS } from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.userLessons.lections, action: SetLectionsType): Array<LectionsType> => {
    return action.type === SET_LECTIONS
    ? action.lections
    : state
}