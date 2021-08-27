import { StatePropsType} from './IQuestions'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        questions: state.qcsApp.question.questions
    }
}