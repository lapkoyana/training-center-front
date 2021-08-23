import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './AnswersPropsTypes'
import { StateType } from './../../redux/reducers/index'
import { setAnswers, setUsers, setLections } from '../../redux/actions/answers-lect'
import { Answers } from './Answers'
import { mapStateToProps } from './AnswersMapper'

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setAnswers, setUsers, setLections })(Answers);