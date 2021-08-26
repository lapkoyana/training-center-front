import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './IQuestions'
import { IInitialState } from '../../constants'; 
import { mapStateToProps } from './QuestionsContainer'
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from '../../actions/questions'
import { Questions } from './QuestionsPL';
import { withRouter } from 'react-router-dom';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setQuestions, addQuestion, deleteQuestion, updateQuestion })
    (withRouter(Questions));