import { setAnswers, setUsers, setLections } from '../../actions/answers-lect'
import { UsersType, LectionsType,AnswersType } from '../../constants'
import { StatePropsType, DispatchPropsType } from './IAnswers'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        answers: state.qcsApp.answersLect.answers,
        users: state.qcsApp.answersLect.users,
        lections: state.qcsApp.answersLect.lections
    }
}

export const mapDispatchToProps = (dispatch: any): DispatchPropsType => ({
    setAnswers: (answers: Array<AnswersType>) => dispatch(setAnswers(answers)),
    setUsers: (users: Array<UsersType>) => dispatch(setUsers(users)),
    setLections: (lections: Array<LectionsType>) => dispatch(setLections(lections))
})