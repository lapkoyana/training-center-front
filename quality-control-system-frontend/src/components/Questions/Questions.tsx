import React, { ChangeEvent } from 'react'
import { QuestionsType } from './../../redux/type'

type PropsType = {
    questions: Array<QuestionsType>
    update: (question: QuestionsType) => void
    remove: (questionId: number | undefined) => void
}

type StateType = {
    editMode: boolean,
    question: QuestionsType
}
class Questions extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        question: {
            id: 0,
            content: ''
        }
    }

    enableTextArea = (id: number | undefined, content: string) => {
        this.setState({
            question: {
                id, content
            },
            editMode: true
        })
    }

    onQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>, id: number) => {
        this.setState({
            question: {
                id,
                content: e.currentTarget.value
            },
        })
    }

    update = () => {
        this.props.update(this.state.question);
        this.setState({
            question: {
                content: ''
            },
            editMode: false,
        })
    }

    render() {
        return <div>
            {this.props.questions.map(q => <div key={q.id}>
                <div>
                    <span>{q.content}</span>
                </div>
                <button onClick={() => {this.enableTextArea(q.id, q.content)}}>Редактировать вопрос</button>
                <button onClick={() => {this.props.remove(q.id)}}>Удалить вопрос</button>
            </div>)}
            <textarea disabled={!this.state.editMode}  
                        onBlur={this.update}
                        onChange={(e) => {this.onQuestionChange(e, this.state.question.id)}}
                        value={this.state.question.content}></textarea>
        </div>
    }
}

export default Questions;