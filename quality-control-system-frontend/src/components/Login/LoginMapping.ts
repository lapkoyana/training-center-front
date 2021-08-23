import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './LoginPropsTypes'

export function mapStateToProps(state: StateType): StatePropsType {
    const { isLoggedIn } = state.auth;
    return {
      isLoggedIn,
    };
  }