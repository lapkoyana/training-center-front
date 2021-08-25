import { StatePropsType } from './LoginPropsTypes'

export const mapStateToProps = (state: any)  => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}