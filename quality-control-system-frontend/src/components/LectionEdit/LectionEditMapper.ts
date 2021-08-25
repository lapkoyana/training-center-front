import { StatePropsType } from './LectionEditPropsTypes'

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        currentLection: state.lesson.currentLection
    }
}
