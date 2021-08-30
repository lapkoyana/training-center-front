import React from 'react'
import { Link } from 'react-router-dom';
import StudentService from '../../services/StudentService';
import { StatePropsType, DispatchPropsType } from './ILectionsPageForStudents'

export class LectionsPageForStudents extends React.Component<StatePropsType & DispatchPropsType> {
    async componentDidMount() {
        await StudentService.getLessons()
            .then(response => response.json())
            .then(data =>
                this.props.setLections(data)
            )

        await StudentService.getUserLesson()
            .then(response => response.json())
            .then(data => 
                this.props.setUserLessons(data)
            )

        this.props.setLections(this.props.lections.map(lesson => {
            lesson.completeness = false;
            this.props.userLessons.forEach(userLesson => {
                if (lesson.id === userLesson['lessonId']){
                    lesson.completeness = userLesson['signOfCompleteness'];
                }
            });
            return lesson;
        }))
    }

    handleClick = (filename: string ) => {
        this.getLessonFile(filename)
    }

    async getLessonFile(filename: string) {
        await StudentService.getLessonFile(filename)
        .then(response => response.blob())
        .then(blob => 
            this.props.setLessonFile(URL.createObjectURL(blob))
            )
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