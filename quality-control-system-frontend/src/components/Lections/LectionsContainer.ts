import { StatePropsType } from './ILections'
import { StateType } from '../../reducers';

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}