import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType, OwnProps } from './IAnswers'
import { IInitialState } from '../../constants/index'
import { setAnswers, setUsers, setLections } from '../../actions/answers-lect';
import { Answers } from './AnswersPL'
import { mapStateToProps } from './AnswersContainer'

export default connect<StatePropsType, DispatchPropsType, OwnProps>
    (mapStateToProps, { setAnswers, setUsers, setLections })(Answers);