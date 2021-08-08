import React from 'react';
import { connect } from "react-redux";
import Lections from "./Lections";
import { setLections, deleteLection } from '../../redux/lesson-reducer';

class LectionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/lections')
            .then(response => response.json())
            .then(data => this.props.setLections(data));
    }

    remove(lectionId) {
        fetch('http://localhost:8080/lections/' + lectionId, {
            method: 'DELETE'
        })
        .then(() => this.props.deleteLection(lectionId));
    }

    render() {
        return <Lections lections={this.props.lections}
            delete={this.remove} />
    }
}

let mapStateToProps = (state) => {
    return {
        lections: state.lessonPage.lections
    }
}

export default connect(mapStateToProps,
    { setLections, deleteLection })
    (LectionsContainer);