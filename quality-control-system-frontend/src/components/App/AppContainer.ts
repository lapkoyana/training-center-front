import { StatePropsType } from './IApp'
// import { StateType } from '../../reducers';

export function mapStateToProps(state: any): StatePropsType {
    return { currentUser: state.qcsApp.auth.currentUser };
  }