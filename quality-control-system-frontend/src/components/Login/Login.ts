import { IInitialState } from '../../constants/index';
import { connect } from "react-redux";
import { StatePropsType, DispatchPropsType } from './ILogin'
import { mapStateToProps, mapDispatchToProps } from './LoginContainer'
import { Login } from './LoginPL'

export default connect < StatePropsType, DispatchPropsType, {}, IInitialState >
(mapStateToProps, mapDispatchToProps )(Login);