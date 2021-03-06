import { connect } from "react-redux";
import { StatePropsType, DispatchPropsType } from './ILections'
import { IInitialState } from "../../constants"; 
import { setLections, setCurrentLection } from '../../actions/lesson'
import { mapStateToProps } from './LectionsContainer'
import { Lections } from "./LectionsPL";

export default connect<StatePropsType, DispatchPropsType, {}, IInitialState>
                (mapStateToProps, { setLections, setCurrentLection })(Lections);