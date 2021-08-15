import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAnswers, setUsers, setLections } from './../../redux/actions/answers-lect'

class Answers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLessonValue: '',
            currentUserValue: '',
            currentLessonId: 0,
            currentUserId: 0,
            answers: []
        };
    }

    componentDidMount() {
        this.props.setUsers();
        this.props.setLections();
        this.props.setAnswers();

        this.setState({
            currentLessonValue: this.props.lections[0].topic,
            currentUserValue: this.props.users[0].username,
            currentLessonId: this.props.lections[0].id,
            currentUserId: this.props.users[0].id,
        })
    }

    handleChange = (e) => {
        let name = e.target.name;
        if (name === 'lessons') {
            this.setState({
                currentLessonValue: e.target.value,
                currentLessonId: e.target.options[e.target.selectedIndex].id
            })
        } else if (name === 'users') {
            this.setState({
                currentUserValue: e.target.value,
                currentUserId: e.target.options[e.target.selectedIndex].id
            })
        }
    }

    handleClick = () => {
        const answers = this.props.answers;
        let currentAnswers = answers.filter(a => {
            if(a.user === parseInt(this.state.currentUserId, 10) &&
               a.lesson === parseInt(this.state.currentLessonId, 10))
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
                {this.props.lections.map((l) => <option key={l.id} id={l.id}>
                    {l.topic}
                </option>)}
            </select>
            <select onChange={this.handleChange} name="users">
                {this.props.users.map((u) => <option key={u.id} id={u.id}>
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

let mapStateToProps = (state) => {
    return {
        lections: state.answersLect.lections,
        users: state.answersLect.users,
        answers: state.answersLect.answers
    }
}

export default connect(mapStateToProps, { setAnswers, setUsers, setLections })(withRouter(Answers));