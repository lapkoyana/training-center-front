import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './LectionsPageForStudentsPropsTypes'
import { LectionsPageForStudents } from './LectionsPageForStudents'
import { mapStateToProps } from './LectionsPageForStudentsMapper'
import { StateType } from '../../redux/reducers/index'
import { setLections, setUserLesson, getLessonFile } from '../../redux/actions/student'

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setLections, setUserLesson, getLessonFile }) (LectionsPageForStudents);