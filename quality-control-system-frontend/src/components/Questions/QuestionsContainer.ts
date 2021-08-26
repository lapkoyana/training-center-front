import { StatePropsType} from './IQuestions'
import { StateType } from '../../reducers';

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}