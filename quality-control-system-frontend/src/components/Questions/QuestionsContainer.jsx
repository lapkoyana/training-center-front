import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setQuestions } from '../../redux/actions/questions';
import Questions from './Questions';

class QuestionsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.props.setQuestions(this.props.match.params.id);
    }
    
    handleSubmit(e) {
        let currentLection = this.state;
        let value = e.target.value;
        let name = e.target.name;
        currentLection[name] = value;
        this.setState({currentLection});
    }

    addQuestion() {
        const currentLection = this.state;
        this.props.addQuestion(currentLection);
        //тут может быть reload
    }

    render() {
        const currentQuestion = this.state;

        return <div>
                <Questions questions={this.props.questions}/>
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
    { setQuestions })
    (withRouter(QuestionsContainer));