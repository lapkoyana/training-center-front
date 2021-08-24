import { LectionsType, EditLectionType, EDIT_LECTION } from '../../../constants';

let initialState = {
    lections: [] as Array<LectionsType>,
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: EditLectionType): InitialStateType => {
    return action.type === EDIT_LECTION
    ?{
        ...state,
        lections: state.lections.map(l => {
            if (l.id === action.lection.id){
                return action.lection;
            }
            return l;
        })
    }
    : state
}