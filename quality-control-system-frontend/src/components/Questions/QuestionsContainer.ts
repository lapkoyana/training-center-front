import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './QuestionsPropsTypes'
import { StateType } from '../../redux/reducers/index'
import { mapStateToProps } from './QuestionsMapper'
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from '../../redux/actions/questions';
import { Questions } from './Questions';
import { withRouter } from 'react-router-dom';

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setQuestions, addQuestion, deleteQuestion, updateQuestion })
    (withRouter(Questions));