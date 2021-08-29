import { connect } from 'react-redux'
// import { register } from '../../actions/auth' 
import { DispatchPropsType } from './IRegister'
import { Register } from './RegisterPL'

export default connect<{}, DispatchPropsType, {}, null>
(null)(Register)