import { IInitialState } from '../../constants' 
import { StatePropsType } from './LectionsPageForStudentsPropsTypes'

export const mapStateToProps = (state: IInitialState): StatePropsType => {
    return {
        lections: state.students.lections,
        file: state.students.file
    }
}