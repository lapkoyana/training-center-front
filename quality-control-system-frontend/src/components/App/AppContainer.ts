import { connect } from 'react-redux'
import { mapStateToProps } from './AppMapping' 
import { logout } from '../../actions/auth' 
import { App } from './App'
import { IInitialState } from './../../constants/index'
import { StatePropsType, DispatchPropsType } from './AppPropsTypes'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { logout })(App);