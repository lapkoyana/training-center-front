import { connect } from "react-redux";
import { StatePropsType, DispatchPropsType } from './LectionsPropsTypes'
import { StateType } from '../../redux/reducers/index'
import { setLections, deleteLection, setCurrentLection } from '../../redux/actions/lesson';
import { mapStateToProps } from './LectionsMapping'
import { Lections } from "./Lections";

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
                (mapStateToProps, { setLections, deleteLection, setCurrentLection })(Lections);