import React, { ChangeEvent } from 'react';
import { AnswersType } from '../../constants'
import LectionsService from '../../services/LectionsService';
import { StatePropsType, DispatchPropsType } from './IAnswers'

type PropsType = StatePropsType & DispatchPropsType

type MyStateType = {
    currentLessonValue: string,
    currentUserValue: string,
    currentLessonId: number,
    currentUserId: number,
    answers: Array<AnswersType>
}

export class Answers extends React.Component<PropsType, MyStateType> {

    state: MyStateType = {
        currentLessonValue: '',
        currentUserValue: '',
        currentLessonId: 0,
        currentUserId: 0,
        answers: []
    }

    async componentDidMount() {
        await LectionsService.getLessons()
            .then(response => response.json())
            .then(data => 
                this.props.setLections(data)
            )

        await LectionsService.getAnswers()
            .then(response => response.json())
            .then(data => 
                this.props.setAnswers(data)
            )

        await LectionsService.getStudents()
            .then(response => response.json())
            .then(data => 
                this.props.setUsers(data)
            )

        this.setState({
            currentLessonValue: this.props.lections[0].topic,
            currentUserValue: this.props.users[0].username,
            currentLessonId: this.props.lections[0].id!,
            currentUserId: this.props.users[0].id,
        })
    }

    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let name = e.target.name;
        if (name === 'lessons') {
            this.setState({
                currentLessonValue: e.target.value,
                currentLessonId: Number.parseInt(e.target.options[e.target.selectedIndex].id)
            })
        } else if (name === 'users') {
            this.setState({
                currentUserValue: e.target.value,
                currentUserId: Number.parseInt(e.target.options[e.target.selectedIndex].id)
            })
        }
    }

    handleClick = () => {
        const answers = this.props.answers;
        let currentAnswers = answers.filter(a => {
            if(a.user === this.state.currentUserId &&
               a.lesson === this.state.currentLessonId)
                return true;
            else {return false;}
            })
            this.setState({
                answers: currentAnswers
            })
    }

    render() {
        return <div>
            <select onChange={this.handleChange} name="lessons">
                {this.props.lections.map((l) => <option key={l.id} id={l.id?.toString()}>
                    {l.topic}
                </option>)}
            </select>
            <select onChange={this.handleChange} name="users">
                {this.props.users.map((u) => <option key={u.id} id={u.id.toString()}>
                    {u.username}
                </option>)}
            </select>
            <button onClick={this.handleClick}>Показать ответы</button>
            {this.state.answers.map(answer => <div key={answer.id}>
                {answer.content}
            </div>)}
        </div>
    }
}