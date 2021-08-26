import React from 'react';
import { Link } from 'react-router-dom';
// import style from './Lections.module.css';
import { PropsType } from './ILectionsList'

const LectionsList: React.FC<PropsType> = (props) => {
    
    return <div >
        { props.lections.map( l => <div key={l.id}>
            <div>Тема: {l.topic}</div>
            <div>Дата проведения: {l.dateOfClass}</div>
            <div>{l.lectureFile
                    ? 'Файл загружен'
                    : 'Файл не загружен'}</div>
            <div>{l.signOfCompleteness
                ? 'Лекция завершена'
                : 'Лекция не завершена'}</div>
            <Link to={'/lections/' + l.id + '/questions'}>Список вопросов</Link>
            <Link onClick={() => props.setCurrentLection(l.id!)} to={"/lections/" + l.id}><button>Редактировать</button></Link>
            <button onClick={() => props.delete(l.id!)}>Удалить</button>
        </div>)}
        <Link to='/lections/new'><button>Добавить лекцию</button></Link>
    </div>
}

export default LectionsList;