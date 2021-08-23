import React, { ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { StatePropsType, DispatchPropsType } from './QuizPagePropsTypes'
import { StudentAnswersType } from '../../redux/type'

type PathParamType = {lectionId: string}

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type StateType = {
    answers: Array<StudentAnswersType>
}

export class QuizPage extends React.Component<PropsType, StateType> {
    state:StateType = {
        answers: []
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