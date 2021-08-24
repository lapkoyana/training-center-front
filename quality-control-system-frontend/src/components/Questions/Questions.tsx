import React, { ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import QuestionEdit from './QuestionsEdit/QuestionEdit';
import { QuestionsType } from '../../constants'
import { StatePropsType, DispatchPropsType, PathParamType } from './QuestionsPropsTypes'

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type StateType = {
    content: string
}

export class Questions extends React.Component<PropsType, StateType> {

    constructor(props: PropsType) {
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
        this.props.setQuestions(Number.parseInt(this.props.match.params.lectionId));
    }
    
    handleSubmit(e: ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        this.setState({content: value});
    }

    addQuestion() {
        let currentQuestion = this.state;
        this.props.addQuestion(
            Number.parseInt(this.props.match.params.lectionId), currentQuestion);
        this.setState({
            content: ''
        });
    }

    remove(questionId: number | undefined) {
        this.props.deleteQuestion(
            Number.parseInt(this.props.match.params.lectionId), questionId!);
    }

    update(question: QuestionsType) {
        this.props.updateQuestion(
            Number.parseInt(this.props.match.params.lectionId), question);
    }

    render() {
        const currentQuestion = this.state;

        return <div>
                <QuestionEdit questions={this.props.questions}
                    remove={this.remove}
                    update={this.update}/>
                <input type="text" name="content" onChange={this.handleSubmit} value={currentQuestion.content}/>
                <button onClick={this.addQuestion} >Добавить вопрос</button>
            </div>
    }
}