import { IInitialState } from './../../constants/index';
import { StatePropsType } from './AppPropsTypes'

export function mapStateToProps(state: IInitialState): StatePropsType {
    return { currentUser: state.auth.currentUser };
  }