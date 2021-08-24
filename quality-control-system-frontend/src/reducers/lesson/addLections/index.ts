import { LectionsType, AddLectionType, ADD_LECTION } from '../../../constants';

let initialState = {
    lections: [] as Array<LectionsType>,
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AddLectionType): InitialStateType => {
    return action.type === ADD_LECTION
    ?{
        ...state,
        lections: [...state.lections, action.lection]
    }
    : state
}