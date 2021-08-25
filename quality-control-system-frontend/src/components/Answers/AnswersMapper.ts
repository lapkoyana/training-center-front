import { StatePropsType } from './AnswersPropsTypes'

//че за state?
export const mapStateToProps = (state: any): StatePropsType => {
    return {
        //answersLect undefined )))
        answers: state.answersLect.answers,
        users: state.answersLect.users,
        lections: state.answersLect.lections
    }
}