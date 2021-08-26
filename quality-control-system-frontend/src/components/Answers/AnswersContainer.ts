import { StatePropsType } from './IAnswers'
// import { StateType } from '../../reducers';

//any??????????????
export const mapStateToProps = (state: any): StatePropsType => {
    return {
        answers: state.qcsApp.answersLect.answers,
        users: state.qcsApp.answersLect.users,
        lections: state.qcsApp.answersLect.lections
    }
}