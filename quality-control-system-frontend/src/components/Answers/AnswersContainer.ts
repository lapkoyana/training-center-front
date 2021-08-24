import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './AnswersPropsTypes'
import { IInitialState } from '../../constants/index'
import { setAnswers, setUsers, setLections } from './../../actions/answers-lect';
import { Answers } from './Answers'
import { mapStateToProps } from './AnswersMapper'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setAnswers, setUsers, setLections })(Answers);