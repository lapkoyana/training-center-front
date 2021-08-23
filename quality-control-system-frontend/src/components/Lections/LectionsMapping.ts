import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './LectionsPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}