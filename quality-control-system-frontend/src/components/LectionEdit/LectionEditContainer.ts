import { connect } from 'react-redux';
import { StateType } from '../../redux/reducers/index'
import { StatePropsType, DispatchPropsType } from './LectionEditPropsTypes'
import { withRouter } from 'react-router-dom';
import { LectionEdit } from './LectionsEdit';
import { addOrUpdateLection } from '../../redux/actions/lesson';
import { mapStateToProps } from './LectionEditMapper';

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { addOrUpdateLection }) (withRouter(LectionEdit));