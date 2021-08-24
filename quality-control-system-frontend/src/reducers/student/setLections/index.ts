import { LectionsType, SetLectionsType, SET_LECTIONS } from '../../../constants'

type InitialStateType = {
    lections: Array<LectionsType>,
};

let initialState: InitialStateType = {
    lections: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetLectionsType): InitialStateType => {
    return action.type === SET_LECTIONS
    ? {
        ...state,
        lections: action.lections
    }
    : state
}