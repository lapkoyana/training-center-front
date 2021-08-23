import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './QuizPagePropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}