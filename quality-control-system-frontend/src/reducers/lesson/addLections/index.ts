import { LectionsType, AddLectionType, ADD_LECTION } from '../../../constants';
import { initialState } from '../../../constants'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.lesson.lections, action: AddLectionType): Array<LectionsType> => {
    return action.type === ADD_LECTION
    ? Array<LectionsType>(state.push(action.lection))
    : state
}