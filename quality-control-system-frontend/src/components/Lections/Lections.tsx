import React from 'react';
import { Link } from 'react-router-dom';
import style from './Lections.module.css';
import {LectionsType} from '../../redux/type'

type PropsType = {
    lections: Array<LectionsType>
    delete: (lectionId: number) => void
    setCurrentLection: (lectionId: number) => void
}

const Lections: React.FC<PropsType> = (props) => {
    
    return <div >
        { props.lections.map( l => <div className={style.lectionItem} key={l.id}>
            <div>Тема: {l.topic}</div>
            <div>Дата проведения: {l.dateOfClass}</div>
            <div>{l.lectureFile
                    ? 'Файл загружен'
                    : 'Файл не загружен'}</div>
            <div>{l.signOfCompleteness
                ? 'Лекция завершена'
                : 'Лекция не завершена'}</div>
            <Link className={style.questionLink} to={'/lections/' + l.id + '/questions'}>Список вопросов</Link>
            <Link onClick={() => props.setCurrentLection(l.id!)} to={"/lections/" + l.id}><button>Редактировать</button></Link>
            <button onClick={() => props.delete(l.id!)}>Удалить</button>
        </div>)}
        <Link to='/lections/new'><button className={style.addingButton}>Добавить лекцию</button></Link>
    </div>
}

export default Lections;