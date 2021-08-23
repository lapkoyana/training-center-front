import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './QuizPagePropsTypes'
import { StateType } from '../../redux/reducers/index'
import { mapStateToProps } from './QuizPageMapper'
import { addAnswers } from '../../redux/actions/student'
import { setQuestions } from '../../redux/actions/questions'
import { withRouter } from 'react-router';
import { QuizPage } from './QuizPage'

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setQuestions, addAnswers })(withRouter(QuizPage))