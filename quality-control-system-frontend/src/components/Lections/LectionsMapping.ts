import { IInitialState } from '../../constants' 
import { StatePropsType } from './LectionsPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}