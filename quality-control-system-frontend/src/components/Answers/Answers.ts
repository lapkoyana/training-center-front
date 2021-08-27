import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './IAnswers'
import { setAnswers, setUsers, setLections } from '../../actions/answers-lect';
import { Answers } from './AnswersPL'
import { mapStateToProps } from './AnswersContainer'

export default connect<StatePropsType, DispatchPropsType>
    (mapStateToProps, { setAnswers, setUsers, setLections })(Answers);