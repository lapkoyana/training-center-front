import { connect } from 'react-redux';
import { IInitialState } from '../../constants' 
import { StatePropsType, DispatchPropsType } from './LectionEditPropsTypes'
import { withRouter } from 'react-router-dom';
import { LectionEdit } from './LectionsEdit';
import { addOrUpdateLection } from '../../actions/lesson'; 
import { mapStateToProps } from './LectionEditMapper';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { addOrUpdateLection }) (withRouter(LectionEdit));