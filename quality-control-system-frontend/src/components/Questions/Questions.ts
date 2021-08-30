import { connect } from 'react-redux';
import { StatePropsType, DispatchPropsType } from './IQuestions'
import { IInitialState } from '../../constants'; 
import { mapStateToProps, mapDispatchToProps } from './QuestionsContainer'
import { Questions } from './QuestionsPL';
import { withRouter } from 'react-router-dom';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, mapDispatchToProps)
    (withRouter(Questions));