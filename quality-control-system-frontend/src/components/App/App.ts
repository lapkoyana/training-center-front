import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './AppContainer' 
import { App } from './AppPL'
import { IInitialState } from '../../constants/index'
import { StatePropsType, DispatchPropsType } from './IApp'

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, mapDispatchToProps )(App);