import { connect } from "react-redux";
import { login } from "../../redux/actions/auth"
import { StatePropsType, DispatchPropsType } from './LoginPropsTypes'
import { StateType } from '../../redux/reducers/index'
import { mapStateToProps } from './LoginMapping'
import { Login } from './Login'

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
(mapStateToProps, { login })(Login);