import React from 'react'

class Questions extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {this.props.questions.map(q => <div key={q.id}>
                <div>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{q.content}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.q.content}/>
                    </div>
                }
                </div>
                <div>
                    Кнопочки всякие
                </div>
            </div>)}
        </div>
    }
}

export default Questions;