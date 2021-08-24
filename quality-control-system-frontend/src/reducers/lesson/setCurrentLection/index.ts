import { LectionsType, SetCurrentLectionType, SET_CURRENT_LECTION } from '../../../constants';

let initialState = {
    currentLection: {} as LectionsType
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetCurrentLectionType): InitialStateType => {
    return action.type === SET_CURRENT_LECTION
    ? {
        ...state,
        currentLection: action.lection
    }
    : state
}