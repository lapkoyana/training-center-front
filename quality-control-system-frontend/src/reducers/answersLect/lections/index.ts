import { SetLectionsType } from '../../../constants'
import { SET_LECTIONS } from '../../../constants'
import { LectionsType } from '../../../constants'
import { initialState } from '../../../constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.answersLect.lections, action: SetLectionsType): Array<LectionsType> => {
    return action.type === SET_LECTIONS
    ? action.lections
    : state;
}