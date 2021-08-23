import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './LectionsPageForStudentsPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.student.lections,
        file: state.student.file
    }
}