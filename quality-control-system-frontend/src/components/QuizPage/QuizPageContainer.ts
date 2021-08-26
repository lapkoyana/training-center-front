import { StatePropsType } from './IQuizPage'
import { StateType } from '../../reducers';

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}