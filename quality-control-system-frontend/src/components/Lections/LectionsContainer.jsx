import React from 'react';
import { connect } from "react-redux";
import Lections from "./Lections";
import { setLections, deleteLection } from '../../redux/actions/lesson';

class LectionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.props.setLections();
    }

    remove(lectionId) {
        this.props.deleteLection(lectionId);
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