import { StatePropsType, DispatchPropsType } from './ILogin'
import { setCurrentUser, setIsLoggedIn } from '../../actions/auth'
import { UserLoginType } from '../../constants';
// import { StateType } from '../../reducers';


export const mapStateToProps = (state: any): StatePropsType  => {
  return {
    currentUser: state.qcsApp.auth.currentUser,
    isLoggedIn: state.qcsApp.auth.isLoggedIn
  }
}

export function mapDispatchToProps(dispatch: any): DispatchPropsType {
  return{
    setCurrentUser: (currentUser: UserLoginType | null) => dispatch(setCurrentUser(currentUser)),
    setIsLoggedIn: (isLoggedIn: boolean) => dispatch(setIsLoggedIn(isLoggedIn)),
  }
}