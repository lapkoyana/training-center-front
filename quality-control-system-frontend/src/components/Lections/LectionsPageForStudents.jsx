import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLections, setUserLesson, getLessonFile } from './../../redux/actions/student'

class LectionsPageForStudents extends React.Component {
    componentDidMount() {
        this.props.setLections();
        this.props.setUserLesson();
    }

    handleClick = (filename) => {
        this.props.getLessonFile(filename);
    }

    render() {
        return <div>
            {this.props.lessons.map(l => <div key={l.id}>
                <div>{l.topic}</div>
                <div>{l.signOfCompleteness && l.lectureFile
                    ?<a href={this.props.file} download><button onClick={() => this.handleClick(l.lectureFile)}>Скачать лекцию</button></a>
                    :'Лекция еще не завершена преподавателем либо файл не загружен'}</div>
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
        lessons: state.student.lessons,
        file: state.student.file
    }
}

export default connect(mapStateToProps, { setLections, setUserLesson, getLessonFile }) (LectionsPageForStudents);