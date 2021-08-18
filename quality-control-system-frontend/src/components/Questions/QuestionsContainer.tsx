import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from '../../redux/actions/questions';
import Questions from './Questions';
import { StateType } from './../../redux/reducers/index'
import { QuestionsType } from './../../redux/type'

type StatePropsType = {
    questions: Array<QuestionsType>
}

type DispatchPropsType = {
    setQuestions: (lectionId: number) => void,
    addQuestion: (lectionId: number, question: QuestionsType) => void,
    deleteQuestion: (lectionId: number, questionId: number | undefined) => void,
    updateQuestion: (lectionId: number, question: QuestionsType) => void
}

type PathParamType = {lectionId: string}

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

// ошибки
class QuestionsContainer extends React.Component<PropsType> {

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
        let currentQuestion = this.state;
        let value = e.target.value;
        let name = e.target.name;
        currentQuestion[name] = value;
        this.setState({currentQuestion});
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
            Number.parseInt(this.props.match.params.lectionId), questionId);
    }

    update(question: QuestionsType) {
        this.props.updateQuestion(
            Number.parseInt(this.props.match.params.lectionId), question);
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

let mapStateToProps = (state: StateType): StatePropsType => {
    return {
        questions: state.question.questions
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps,{ setQuestions, addQuestion, deleteQuestion, updateQuestion})
    (withRouter(QuestionsContainer));