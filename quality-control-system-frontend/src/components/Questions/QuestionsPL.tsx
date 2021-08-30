import React, { ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import QuestionEdit from './QuestionsEdit/QuestionEdit';
import { QuestionsType } from '../../constants'
import { StatePropsType, DispatchPropsType, PathParamType } from './IQuestions'
import QuestionsService from '../../services/QuestionsService';

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type StateType = {
    content: string
}

export class Questions extends React.Component<PropsType, StateType> {

    state: StateType = {
        content: ''
    }

    componentDidMount() {
        this.setQuestions()
    }

    handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        this.setState({ content: value });
    }

    addQuestion = () => {
        let currentQuestion = this.state;
        QuestionsService.addQuestion(
            Number.parseInt(this.props.match.params.id),
            currentQuestion)
            .then(() => {
                this.setState({
                    content: ''
                })
                this.props.setQuestions([...this.props.questions, currentQuestion])}
            )
    }

    remove = (questionId: number | undefined) => {
        QuestionsService.delete(
            Number.parseInt(this.props.match.params.id),
            questionId!)
            .then(() =>
                this.props.setQuestions(this.props.questions.filter(q => q.id !== questionId))
            )
    }

    update = (question: QuestionsType) => {
        QuestionsService.updateQuestion(
            Number.parseInt(this.props.match.params.id),
            question)
            .then(() => 
                this.props.setQuestions(this.props.questions.map(q => {
                    if (q.id === question.id){
                        return question;
                    }
                    return q;
                }))
            )
    }

    async setQuestions() {
        await QuestionsService.getQuestions(Number.parseInt(this.props.match.params.id))
            .then(response => response.json())
            .then(data =>
                this.props.setQuestions(data)
            )
    }

    render() {
        const currentQuestion = this.state;

        return <div>
            <QuestionEdit questions={this.props.questions}
                remove={this.remove}
                update={this.update} />
            <input type="text" name="content" onChange={this.handleSubmit} value={currentQuestion.content} />
            <button onClick={this.addQuestion} >Добавить вопрос</button>
        </div>
    }
}