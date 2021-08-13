import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLections } from './../../redux/actions/lesson'

class LectionsPageForStudents extends React.Component {
    componentDidMount() {
        this.props.setLections();
    }

    render() {
        return <div>
            {this.props.lections.map(l => <div key={l.id}>
                <div>{l.topic}</div>
                <div>{l.signOfCompletenes
                    ?'Можно скачать файл - потом'
                    :'Лекция еще не завершена преподавателем'}</div>
                <Link>Перейти к форме опроса</Link>
            </div>)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        lections: state.lesson.lections
    }
}

export default connect(mapStateToProps, { setLections }) (LectionsPageForStudents);