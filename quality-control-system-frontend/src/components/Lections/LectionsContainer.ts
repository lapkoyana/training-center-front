import { StatePropsType } from './ILections'
// import { StateType } from '../../reducers';

export const mapStateToProps = (state: any): StatePropsType => {
    return {
        lections: state.qcsApp.lesson.lections
    }
}