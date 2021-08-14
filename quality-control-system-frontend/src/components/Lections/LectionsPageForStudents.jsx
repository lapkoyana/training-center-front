import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLections, setUserLesson } from './../../redux/actions/student'

class LectionsPageForStudents extends React.Component {
    componentDidMount() {
        this.props.setLections();
        this.props.setUserLesson();
    }

    render() {
        return <div>
            {this.props.lessons.map(l => <div key={l.id}>
                <div>{l.topic}</div>
                <div>{l.signOfCompleteness
                    ?'Можно скачать файл - потом'
                    :'Лекция еще не завершена преподавателем'}</div>
                <div>
                    {l.completeness
                        ?'Тест пройден'
                        :<Link to={"/lessons/" + l.id + "/questions"}>Перейти к форме опроса</Link>
                    }
                </div>
            </div>)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        lessons: state.student.lessons
    }
}

export default connect(mapStateToProps, { setLections, setUserLesson }) (LectionsPageForStudents);