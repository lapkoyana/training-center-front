import React, { ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { StatePropsType, DispatchPropsType } from './IQuizPage'
import { StudentAnswersType } from '../../constants'
import StudentService from '../../services/StudentService';

type PathParamType = {id: string}

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type StateType = {
    answers: Array<StudentAnswersType>
}

export class QuizPage extends React.Component<PropsType, StateType> {
    state:StateType = {
        answers: []
    }

    componentDidMount() {
        this.getQuestions();
    }

    async getQuestions() {
        await StudentService.getQuestions(Number.parseInt(this.props.match.params.id))
        .then(response => response.json())
        .then(data => 
            this.props.setQuestions(data)
        )
    }

    handleChange(e: ChangeEvent<HTMLTextAreaElement>, i: number) {
        let answers = this.state.answers;
        if (answers[i] == undefined) {
            answers.push({
                content: ''
            });
        }
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
        this.addAnswers(Number.parseInt(this.props.match.params.id), answers)
        this.props.history.push("/lessons");
        window.location.reload();
    }

    async addAnswers(lessonId: number, answers: Array<StudentAnswersType>) {
        await StudentService.addAnswers(lessonId, answers)
            .then(() =>
                this.props.setAnswers(answers)
            )
    }

    render() {
        const  answers = this.state.answers;

        return <div>
            {this.props.questions.map((q, index) => <div key={q.id}>
                {console.log(index)}
                <div>{q.content}</div>
                <textarea onChange={(e) => {this.handleChange(e, index)}} value={answers[index]?.content}></textarea>
            </div>)}
            <button onClick={this.handleClick}></button>
        </div>
    }
}