import { StatePropsType } from './ILectionEdit'
import { StateType } from '../../reducers';

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        currentLection: state.lesson.currentLection
    }
}