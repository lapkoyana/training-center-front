import { LectionsType, SetLectionsType, SET_LECTIONS } from '../../../constants';

let initialState = {
    lections: [] as Array<LectionsType>,
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetLectionsType): InitialStateType => {
    return action.type === SET_LECTIONS
    ? {
        ...state,
        lections: action.lections
    }
    : state
}