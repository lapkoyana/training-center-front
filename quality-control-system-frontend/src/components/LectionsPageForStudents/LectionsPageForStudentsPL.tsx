import React from 'react'
import { Link } from 'react-router-dom';
import { StatePropsType, DispatchPropsType } from './ILectionsPageForStudents'

export class LectionsPageForStudents extends React.Component<StatePropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.setLections();
        this.props.setUserLesson();
    }

    handleClick = (filename: string ) => {
        this.props.getLessonFile(filename);
    }

    render() {
        return <div>
            {this.props.lections.map(l => <div key={l.id}>
                <div>{l.topic}</div>
                <div>{l.signOfCompleteness && l.lectureFile
                    ?<a href={this.props.file} download={l.lectureFile}><button onClick={() => this.handleClick(l.lectureFile!)}>Скачать лекцию</button></a>
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