import { StateType } from '../../redux/reducers/index'
import { StatePropsType} from './QuestionsPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}