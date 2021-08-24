import { IInitialState } from '../../constants'
import { StatePropsType} from './QuestionsPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        questions: state.question.questions
    }
}