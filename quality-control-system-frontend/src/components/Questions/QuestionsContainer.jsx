import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from '../../redux/actions/questions';
import Questions from './Questions';

class QuestionsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.props.setQuestions(this.props.match.params.id);
    }
    
    handleSubmit(e) {
        let currentQuestion = this.state;
        let value = e.target.value;
        let name = e.target.name;
        currentQuestion[name] = value;
        this.setState({currentQuestion});
    }

    addQuestion() {
        const {currentQuestion} = this.state;
        this.props.addQuestion(this.props.match.params.id, currentQuestion);
        this.setState({
            content: ''
        });
    }

    remove(questionId) {
        this.props.deleteQuestion(this.props.match.params.id, questionId);
    }

    update(question) {
        this.props.updateQuestion(this.props.match.params.id, question);
    }

    render() {
        const currentQuestion = this.state;

        return <div>
                <Questions questions={this.props.questions}
                    remove={this.remove}
                    update={this.update}/>
                <input type="text" name="content" onChange={this.handleSubmit} value={currentQuestion.content}/>
                <button onClick={this.addQuestion} >Добавить вопрос</button>
            </div>
    }
}

let mapStateToProps = (state) => {
    return {
        questions: state.question.questions
    }
}

export default connect(mapStateToProps,
    { setQuestions, addQuestion, deleteQuestion, updateQuestion})
    (withRouter(QuestionsContainer));