import React from 'react';
import { connect } from "react-redux";
import Lections from "./Lections";
import { setLections, deleteLection } from '../../redux/actions/lesson';
import LectionsService from '../../services/LectionsService';

class LectionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        LectionsService.getLessons()
            .then(response => response.json())
            .then(data => this.props.setLections(data));
    }

    remove(lectionId) {
        LectionsService.delete(lectionId)
        .then(() => this.props.deleteLection(lectionId)); // СДЕЛАЛА
    }

    render() {
        return <Lections lections={this.props.lections}
            delete={this.remove} />
    }
}

let mapStateToProps = (state) => {
    return {
        lections: state.lesson.lections
    }
}

export default connect(mapStateToProps,
    { setLections, deleteLection })
    (LectionsContainer);