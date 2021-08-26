import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './ILectionsPageForStudents'
import { LectionsPageForStudents } from './LectionsPageForStudentsPL'
import { mapStateToProps } from './LectionsPageForStudentsContainer'
import { IInitialState } from '../../constants';
import { setLections, setUserLesson, getLessonFile } from '../../actions/student'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setLections, setUserLesson, getLessonFile }) (LectionsPageForStudents);