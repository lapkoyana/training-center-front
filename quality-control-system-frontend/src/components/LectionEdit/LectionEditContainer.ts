import { StatePropsType } from './ILectionEdit'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        currentLection: state.qcsApp.lesson.currentLection
    }
}