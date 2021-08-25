import { LectionsType, EditLectionType, EDIT_LECTION } from '../../../constants';
import { initialState } from '../../../constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.lesson.lections, action: EditLectionType): Array<LectionsType> => {
    return action.type === EDIT_LECTION
    ? state.map(l => {
        if (l.id === action.lection.id){
            return action.lection;
        }
        return l;
    })
    : state
}