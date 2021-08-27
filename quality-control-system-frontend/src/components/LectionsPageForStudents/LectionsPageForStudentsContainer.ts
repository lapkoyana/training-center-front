import { StatePropsType } from './ILectionsPageForStudents'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        lections: state.qcsApp.student.lections,
        file: state.qcsApp.student.file
    }
}