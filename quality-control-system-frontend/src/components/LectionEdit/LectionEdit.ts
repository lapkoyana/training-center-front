import { connect } from 'react-redux';
import { IInitialState } from '../../constants' 
import { StatePropsType, DispatchPropsType } from './ILectionEdit'
import { withRouter } from 'react-router-dom';
import { LectionEdit } from './LectionsEditPL';
import { addOrUpdateLection } from '../../actions/lesson'; 
import { mapStateToProps } from './LectionEditContainer';

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
    (mapStateToProps, { addOrUpdateLection }) (withRouter(LectionEdit));