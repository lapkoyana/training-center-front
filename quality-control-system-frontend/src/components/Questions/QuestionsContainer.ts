import { setQuestions } from '../../actions/questions'
import { QuestionsType } from '../../constants'
import { StatePropsType, DispatchPropsType } from './IQuestions'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        questions: state.qcsApp.question.questions
    }
}

export const mapDispatchToProps = (dispatch: any): DispatchPropsType => ({
    setQuestions: (questions: Array<QuestionsType>) => dispatch(setQuestions(questions))
})