import { StateType } from '../../reducers/index'
import { StatePropsType } from './LoginPropsTypes'

export function mapStateToProps(state: StateType): StatePropsType {
    const { isLoggedIn } = state.qcsApp.auth.loginSuccess.isLoggedIn;
    return {
      isLoggedIn,
    };
  }