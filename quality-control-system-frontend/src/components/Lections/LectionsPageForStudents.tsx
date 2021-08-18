import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLections, setUserLesson, getLessonFile } from '../../redux/actions/student'
import { LectionsType } from './../../redux/type'
import { StateType } from './../../redux/reducers/index'

type StatePropsType = {
    lections: Array<LectionsType>,
    file: string | undefined
}

type DispatchPropsType = {
    setLections: () => void,
    setUserLesson: () => void,
    getLessonFile: (filename: string | undefined) => void
}

class LectionsPageForStudents extends React.Component<StatePropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.setLections();
        this.props.setUserLesson();
    }

    handleClick = (filename: string | undefined) => {
        this.props.getLessonFile(filename);
    }

    render() {
        return <div>
            {this.props.lections.map(l => <div key={l.id}>
                <div>{l.topic}</div>
                <div>{l.signOfCompleteness && l.lectureFile
                    ?<a href={this.props.file} download={l.lectureFile}><button onClick={() => this.handleClick(l.lectureFile)}>Скачать лекцию</button></a>
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

const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        lections: state.student.lections,
        file: state.student.file
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { setLections, setUserLesson, getLessonFile }) (LectionsPageForStudents);