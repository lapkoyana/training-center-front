import { IInitialState } from '../../constants/index';
import { connect } from "react-redux";
import { login } from '../../actions/auth'; 
import { StatePropsType, DispatchPropsType } from './ILogin'
import { mapStateToProps } from './LoginContainer'
import { Login } from './LoginPL'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
(mapStateToProps, { login })(Login);