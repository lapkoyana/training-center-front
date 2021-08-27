import { StatePropsType } from './ILogin'
// import { StateType } from '../../reducers';


export const mapStateToProps = (state: any): StatePropsType  => {
  return {
    isLoggedIn: state.qcsApp.auth.isLoggedIn,
  }
}