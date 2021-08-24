import { connect } from "react-redux";
import { StatePropsType, DispatchPropsType } from './LectionsPropsTypes'
import { IInitialState } from "../../constants"; 
import { setLections, deleteLection, setCurrentLection } from './../../actions/lesson'
import { mapStateToProps } from './LectionsMapping'
import { Lections } from "./Lections";

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
                (mapStateToProps, { setLections, deleteLection, setCurrentLection })(Lections);