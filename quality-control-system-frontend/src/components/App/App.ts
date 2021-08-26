import { connect } from 'react-redux'
import { mapStateToProps } from './AppContainer' 
import { logout } from '../../actions/auth' 
import { App } from './AppPL'
import { IInitialState } from '../../constants/index'
import { StatePropsType, DispatchPropsType } from './IApp'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { logout })(App);