import { setLections } from '../../actions/lesson';
import { LectionsType } from '../../constants/index';
import { StatePropsType, DispatchPropsType } from './ILectionEdit'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => ({
    currentLection: state.qcsApp.lesson.currentLection,
    lections: state.qcsApp.lesson.lections
})

export const dispatchStateToProps = (dispatch: any): DispatchPropsType => ({
    setLections: (lections: Array<LectionsType>) => dispatch(setLections(lections))
})