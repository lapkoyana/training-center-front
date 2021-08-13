import React from 'react'

class Questions extends React.Component {

    state = {
        editMode: false,
        question: {
            content: ''
        }
    }

    enableTextArea = (e, id, content) => {
        this.setState({
            question: {
                id, content
            },
            editMode: true
        })
    }

    onQuestionChange = (e, id) => {
        this.setState({
            question: {
                id,
                content: e.target.value
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
                <button onClick={(e) => {this.enableTextArea(e, q.id, q.content)}}>Редактировать вопрос</button>
                <button onClick={() => {this.props.remove(q.id)}}>Удалить вопрос</button>
            </div>)}
            <textarea disabled={this.state.editMode? '' : 'disabled'}  
                        onBlur={this.update}
                        onChange={(e) => {this.onQuestionChange(e, this.state.question.id)}}
                        value={this.state.question.content}></textarea>
        </div>
    }
}

export default Questions;