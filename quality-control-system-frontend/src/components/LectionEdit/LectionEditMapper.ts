import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './LectionEditPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        currentLection: state.lesson.currentLection
    }
}
