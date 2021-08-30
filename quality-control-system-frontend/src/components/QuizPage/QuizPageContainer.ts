import { setQuestions } from '../../actions/questions'
import { setAnswers } from '../../actions/student'
import { QuestionsType, StudentAnswersType } from '../../constants'
import { StatePropsType, DispatchPropsType } from './IQuizPage'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        questions: state.qcsApp.question.questions
    }
}

export const mapDispatchToProps = (dispatch: any): DispatchPropsType => ({
    setQuestions: (questions: Array<QuestionsType>) => dispatch(setQuestions(questions)),
    setAnswers: (answers: Array<StudentAnswersType>) => dispatch(setAnswers(answers))
})