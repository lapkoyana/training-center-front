import { LectionsType, SetCurrentLectionType, SET_CURRENT_LECTION } from '../../../constants';
import { initialState } from '../../../constants'



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.lesson.currentLection, action: SetCurrentLectionType): LectionsType => {
    return action.type === SET_CURRENT_LECTION
    ? action.lection
    : state
}