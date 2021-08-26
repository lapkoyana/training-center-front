import { StatePropsType } from './ILectionsPageForStudents'
import { StateType } from '../../reducers';

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.students.lections,
        file: state.students.file
    }
}