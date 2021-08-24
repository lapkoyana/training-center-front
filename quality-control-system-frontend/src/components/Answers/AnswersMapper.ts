import { IInitialState } from '../../constants/index'
import { StatePropsType } from './AnswersPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        //answersLect undefined )))
        answers: state.answersLect.answers,
        users: state.answersLect.users,
        lections: state.answersLect.lections
    }
}