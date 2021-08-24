import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './QuizPagePropsTypes'
import { IInitialState } from '../../constants' 
import { mapStateToProps } from './QuizPageMapper'
import { addAnswers } from '../../actions/student'
import { setQuestions } from '../../actions/questions'
import { withRouter } from 'react-router';
import { QuizPage } from './QuizPage'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setQuestions, addAnswers })(withRouter(QuizPage))