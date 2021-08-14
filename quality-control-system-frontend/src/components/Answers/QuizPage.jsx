import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { setQuestions, addAnswers } from './../../redux/actions/student'

class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            answers: []
        }
    }

    componentDidMount() {
        this.props.setQuestions(this.props.match.params.id);
    }

    handleChange(e, i) {
        let answers = this.state.answers;
        answers[i] = e.target.value
        this.setState({answers});
    }

    handleClick = () => {
        let answers = this.state.answers.map(answer => {
            let tmp = answer;
            answer = {};
            answer.content = tmp;
            return answer;
        })
        this.props.addAnswers(this.props.match.params.id, answers);
        this.props.history.push("/lessons");
        window.location.reload();
    }

    render() {
        const  answers = this.state.answers;

        return <div>
            {this.props.questions.map((q, index) => <div key={q.id}>
                {console.log(index)}
                <div>{q.content}</div>
                <textarea onChange={(e) => {this.handleChange(e, index)}} value={answers[index]}></textarea>
            </div>)}
            <button onClick={this.handleClick}></button>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        questions: state.question.questions
    }
}

export default connect(mapStateToProps, { setQuestions, addAnswers })(withRouter(QuizPage))