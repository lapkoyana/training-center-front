import { StatePropsType} from './QuestionsPropsTypes'

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        questions: state.question.questions
    }
}