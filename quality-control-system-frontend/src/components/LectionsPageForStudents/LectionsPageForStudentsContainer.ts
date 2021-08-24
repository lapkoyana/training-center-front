import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './LectionsPageForStudentsPropsTypes'
import { LectionsPageForStudents } from './LectionsPageForStudents'
import { mapStateToProps } from './LectionsPageForStudentsMapper'
import { IInitialState } from '../../constants';
import { setLections, setUserLesson, getLessonFile } from './../../actions/student'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setLections, setUserLesson, getLessonFile }) (LectionsPageForStudents);