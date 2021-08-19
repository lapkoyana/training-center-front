import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { setQuestions, addAnswers } from '../../redux/actions/student'
import { QuestionsType, StudentAnswersType } from './../../redux/type'
import { StateType } from './../../redux/reducers/index'
import { RouteComponentProps } from 'react-router-dom';

type StatePropsType = {
    questions: Array<QuestionsType>
}

type DispatchPropsType = {
    setQuestions: (lectionId: number) => void,
    addAnswers: (lectionId: number, answers: Array<StudentAnswersType>) => void
}

type PathParamType = {lectionId: string}

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type MyStateType = {
    answers: Array<StudentAnswersType>
}

class QuizPage extends React.Component<PropsType, MyStateType> {
    constructor(props: PropsType) {
        super(props);
        
        this.state = {
            answers: []
        }
    }

    componentDidMount() {
        this.props.setQuestions(Number.parseInt(this.props.match.params.lectionId));
    }

    handleChange(e: ChangeEvent<HTMLTextAreaElement>, i: number) {
        let answers = this.state.answers;
        answers[i].content = e.target.value
        this.setState({answers});
    }

    handleClick = () => {
        let answers = this.state.answers.map(answer => {
            let tmp = answer.content;
            answer = {content: ''};
            answer.content = tmp;
            return answer;
        })
        this.props.addAnswers(Number.parseInt(this.props.match.params.lectionId), answers);
        this.props.history.push("/lessons");
        window.location.reload();
    }

    render() {
        const  answers = this.state.answers;

        return <div>
            {this.props.questions.map((q, index) => <div key={q.id}>
                {console.log(index)}
                <div>{q.content}</div>
                <textarea onChange={(e) => {this.handleChange(e, index)}} value={answers[index].content}></textarea>
            </div>)}
            <button onClick={this.handleClick}></button>
        </div>
    }
}

let mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setQuestions, addAnswers })(withRouter(QuizPage))