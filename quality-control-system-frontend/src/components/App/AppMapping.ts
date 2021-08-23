import { StateType } from '../../redux/reducers/index'
import { StatePropsType } from './AppPropsTypes'

export function mapStateToProps(state: StateType): StatePropsType {
    const { currentUser } = state.auth;
    return { currentUser };
  }