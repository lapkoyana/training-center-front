import { StatePropsType } from './QuizPagePropsTypes'

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        questions: state.question.questions
    }
}