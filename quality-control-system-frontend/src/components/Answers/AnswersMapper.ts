import { IInitialState } from '../../constants/index'
import { StatePropsType } from './AnswersPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        lections: state.answersLect.lections,
        users: state.answersLect.users,
        answers: state.answersLect.answers
    }
}