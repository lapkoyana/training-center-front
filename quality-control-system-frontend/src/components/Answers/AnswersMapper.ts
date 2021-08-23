import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './AnswersPropsTypes'

export const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.answersLect.lections,
        users: state.answersLect.users,
        answers: state.answersLect.answers
    }
}