import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './QuestionsPropsTypes'
import { IInitialState } from '../../constants'; 
import { mapStateToProps } from './QuestionsMapper'
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from './../../actions/questions'
import { Questions } from './Questions';
import { withRouter } from 'react-router-dom';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { setQuestions, addQuestion, deleteQuestion, updateQuestion })
    (withRouter(Questions));