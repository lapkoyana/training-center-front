import { LectionsType, DeleteLectionType, DELETE_LECTION } from '../../../constants';
import { initialState } from '../../../constants'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.lesson.lections, action: DeleteLectionType): Array<LectionsType> => {
    return action.type === DELETE_LECTION
    ? state.filter(l => l.id !== action.lectionId)
    : state
}