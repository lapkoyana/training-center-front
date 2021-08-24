import { IInitialState } from '../../constants' 
import { StatePropsType } from './LectionEditPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        currentLection: state.lesson.currentLection
    }
}