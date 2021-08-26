import { StatePropsType } from './IApp'
import { StateType } from '../../reducers';

export function mapStateToProps(state: StateType): StatePropsType {
    return { currentUser: state.qcsApp.lesson.addLections };
  }