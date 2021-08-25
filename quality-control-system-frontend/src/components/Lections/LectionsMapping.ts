import { StatePropsType } from './LectionsPropsTypes'

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}