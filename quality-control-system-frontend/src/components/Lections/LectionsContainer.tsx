import React from 'react';
import { connect } from "react-redux";
import Lections from "./Lections";
import { setLections, deleteLection, setCurrentLection } from '../../redux/actions/lesson';
import { LectionsType } from './../../redux/type'
import { StateType } from './../../redux/reducers/index'

type StatePropsType = {
    lections: Array<LectionsType>
}

type DispatchPropsType = {
    setLections: () => void,
    deleteLection: (lectionId: number) => void
    setCurrentLection: (lectionId: number) => void
}

type PropsType = StatePropsType & DispatchPropsType

class LectionsContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.props.setLections();
    }

    remove(lectionId: number) {
        this.props.deleteLection(lectionId!);
    }

    setCurrentLection = (lectionId: number) => {
        this.props.setCurrentLection(lectionId);
    }

    render() {
        return <Lections lections={this.props.lections}
                         delete={this.remove}
                         setCurrentLection={this.setCurrentLection}/>
    }
}

const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
                (mapStateToProps, { setLections, deleteLection, setCurrentLection })(LectionsContainer);