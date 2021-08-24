import { StateType } from '../../reducers/index'
import { StatePropsType } from './LectionEditPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        currentLection: state.qcsApp.lesson.setCurrentLection.currentLection
    }
}
