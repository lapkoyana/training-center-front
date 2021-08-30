import { connect } from 'react-redux'
import { StatePropsType, DispatchPropsType } from './IQuizPage'
import { IInitialState } from '../../constants' 
import { mapStateToProps, mapDispatchToProps } from './QuizPageContainer'
import { withRouter } from 'react-router';
import { QuizPage } from './QuizPagePL'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, mapDispatchToProps)(withRouter(QuizPage))