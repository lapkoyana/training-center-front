import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './ILectionsPageForStudents'
import { LectionsPageForStudents } from './LectionsPageForStudentsPL'
import { mapStateToProps, mapDispatchToProps } from './LectionsPageForStudentsContainer'
import { IInitialState } from '../../constants';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps,mapDispatchToProps) (LectionsPageForStudents);