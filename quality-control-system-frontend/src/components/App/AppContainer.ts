import { UserLoginType } from '../../constants';
import { StatePropsType, DispatchPropsType } from './IApp'
import { setCurrentUser, setIsLoggedIn } from '../../actions/auth' 
// import { StateType } from '../../reducers';

export function mapStateToProps(state: any): StatePropsType {
  return { currentUser: state.qcsApp.auth.currentUser };
}

export function mapDispatchToProps(dispatch: any): DispatchPropsType {
  return{
    setCurrentUser: (currentUser: UserLoginType | null) => dispatch(setCurrentUser(currentUser)),
    setIsLoggedIn: (isLoggedIn: boolean) => dispatch(setIsLoggedIn(isLoggedIn)),
  }
}