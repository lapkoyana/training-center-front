import { StateType } from '../../reducers/index'
import { StatePropsType } from './LectionsPageForStudentsPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.qcsApp.student.setLections.lections,
        file: state.qcsApp.student.setFile.file
    }
}