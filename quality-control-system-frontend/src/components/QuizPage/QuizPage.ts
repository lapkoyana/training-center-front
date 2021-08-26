import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './IQuizPage'
import { IInitialState } from '../../constants' 
import { mapStateToProps } from './QuizPageContainer'
import { addAnswers } from '../../actions/student'
import { setQuestions } from '../../actions/questions'
import { withRouter } from 'react-router';
import { QuizPage } from './QuizPagePL'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setQuestions, addAnswers })(withRouter(QuizPage))