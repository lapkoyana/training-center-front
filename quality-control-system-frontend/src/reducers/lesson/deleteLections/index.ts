import { LectionsType, DeleteLectionType, DELETE_LECTION } from '../../../constants';

let initialState = {
    lections: [] as Array<LectionsType>,
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DeleteLectionType): InitialStateType => {
    return action.type === DELETE_LECTION
    ? {
        ...state,
        lections: state.lections.filter(l => l.id !== action.lectionId)
    }
    : state
}