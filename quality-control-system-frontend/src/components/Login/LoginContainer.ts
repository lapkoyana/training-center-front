import { IInitialState } from './../../constants/index';
import { connect } from "react-redux";
import { login } from '../../actions/auth'; 
import { StatePropsType, DispatchPropsType } from './LoginPropsTypes'
import { mapStateToProps } from './LoginMapping'
import { Login } from './Login'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
(mapStateToProps, { login })(Login);