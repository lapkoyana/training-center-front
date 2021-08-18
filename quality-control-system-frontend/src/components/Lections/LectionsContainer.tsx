import React from 'react';
import { connect } from "react-redux";
import Lections from "./Lections";
import { setLections, deleteLection } from '../../redux/actions/lesson';
import { LectionsType } from './../../redux/type'
import { StateType } from './../../redux/reducers/index'

type StatePropsType = {
    lections: Array<LectionsType>
}

type DispatchPropsType = {
    setLections: () => void,
    deleteLection: (lectionId: number | undefined) => void
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

    remove(lectionId: number | undefined) {
        this.props.deleteLection(lectionId);
    }

    render() {
        return <Lections lections={this.props.lections}
                         delete={this.remove} />
    }
}

const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.lesson.lections
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
                (mapStateToProps, { setLections, deleteLection })(LectionsContainer);