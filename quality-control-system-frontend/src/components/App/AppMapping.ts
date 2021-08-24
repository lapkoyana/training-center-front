import { StateType } from '../../reducers/index'
import { StatePropsType } from './AppPropsTypes'

export function mapStateToProps(state: StateType): StatePropsType {
    const { currentUser } = state.qcsApp.auth.loginSuccess.currentUser;
    return { currentUser };
  }