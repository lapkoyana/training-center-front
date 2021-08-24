import { connect } from 'react-redux'
import { register } from '../../actions/auth' 
import { DispatchPropsType } from './RegisterPropsTypes'
import { Register } from './Register'

export default connect<{}, DispatchPropsType, {}, null>
(null, {register} )(Register)