import { connect } from 'react-redux'
import { mapStateToProps } from './AppMapping' 
import { logout } from '../../redux/actions/auth'
import { App } from './App'

export default connect(mapStateToProps, { logout })(App);