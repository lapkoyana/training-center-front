import { StatePropsType } from './AppPropsTypes'

export function mapStateToProps(state: any): StatePropsType {
    return { currentUser: state.auth.currentUser };
  }