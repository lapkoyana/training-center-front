import { StatePropsType } from './ILogin'
import { StateType } from '../../reducers';


export const mapStateToProps = (state: StateType)  => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}