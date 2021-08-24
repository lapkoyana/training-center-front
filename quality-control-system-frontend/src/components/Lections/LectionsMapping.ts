import { StateType } from '../../reducers/index'
import { StatePropsType } from './LectionsPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.qcsApp.lesson.setLections.lections
    }
}