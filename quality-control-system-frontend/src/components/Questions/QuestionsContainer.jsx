import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setQuestions } from '../../redux/actions/questions';
import Questions from './Questions';

class QuestionsContainer extends React.Component {
    componentDidMount() {
        this.props.setQuestions(this.props.match.params.id);
    }

    render() {
        return <Questions questions={this.props.questions}/>
    }
}

let mapStateToProps = (state) => {
    return {
        questions: state.question.questions
    }
}

export default connect(mapStateToProps,
    { setQuestions })
    (withRouter(QuestionsContainer));