import { IInitialState } from '../../constants' 
import { StatePropsType } from './QuizPagePropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        questions: state.question.questions
    }
}