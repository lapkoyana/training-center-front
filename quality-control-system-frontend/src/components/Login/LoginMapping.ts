import { IInitialState } from '../../constants'; 
import { StatePropsType } from './LoginPropsTypes'

export function mapStateToProps(state: IInitialState): StatePropsType {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}