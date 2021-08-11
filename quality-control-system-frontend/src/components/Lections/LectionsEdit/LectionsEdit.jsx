import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setLections, setCurrentLection, addLection, editLection } from '../../../redux/reducers/lesson';
import authHeader from '../../../services/auth-header';

class LectionEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id !== 'new'){
            fetch('http://localhost:8080/lections/' + this.props.match.params.id, {
                headers: authHeader()
            })
                .then(response => response.json())
                .then(data => this.props.setCurrentLection(data));
        }
    }

    handleChange(e) {
        debugger;
        const target = e.target;
        
        const name = target.name;
        let currentLection = {...this.props.currentLection};

        if (target.type === "checkbox"){
            const checked = target.checked;
            currentLection[name] = checked;
        } else if (target.type === "file"){
            const file = target.files[0];
            currentLection[name] = file;
        } else {
            const value = target.value;
            currentLection[name] = value;
        }

        this.props.setCurrentLection(currentLection);
    }

    handleSubmit(e) {
        e.preventDefault();
        const currentLection = this.props.currentLection;

        let formData = new FormData();
        if (currentLection.id){
            formData.append("lesson", JSON.stringify({
                id: currentLection.id,
                topic: currentLection.topic,
                dateOfClass: currentLection.dateOfClass,
                signOfCompleteness: currentLection.signOfCompleteness}));
        } else {
            formData.append("lesson", JSON.stringify({
                topic: currentLection.topic,
                dateOfClass: currentLection.dateOfClass,
                signOfCompleteness: currentLection.signOfCompleteness}));
        }

        formData.append("file", currentLection.lectureFile);
        
        let currentMethod = '';
        if (currentLection.id){
            currentMethod = 'PUT';
        } else {
            currentMethod = 'POST';
        }

        fetch('http://localhost:8080/lections', {
            method: currentMethod,
            headers: authHeader(),
            body: formData,
        });
        if (currentLection.id){
            this.props.editLection(currentLection);
        } else {
            this.props.addLection(currentLection);
        }
        this.props.history.push('/lections');
    }

    render() {
        return(
            <form id="formData" onSubmit={this.handleSubmit}>
                <div><label>
                    Тема:
                    <input type="text" name="topic" onChange={this.handleChange} value={this.props.currentLection.topic || ''}/>
                </label></div>
                <div><label>
                    Дата:
                    <input type="date" name="dateOfClass" onChange={this.handleChange} value={this.props.currentLection.dateOfClass || ''}/>
                </label></div>
                <div><label>
                    Файл:
                    <input type="file" name="lectureFile" onChange={this.handleChange} />
                </label></div>
                <div><label>
                    Признак завершенности:
                    <input type="checkbox" name="signOfCompleteness" onChange={this.handleChange} checked={this.props.currentLection.signOfCompleteness? 'checked' : ''}/>
                </label></div>
                <input type="submit" value="ОК" />
            </form>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentLection: state.lessonPage.currentLection
    }
}

export default connect(mapStateToProps,{setLections, setCurrentLection, addLection, editLection}) (withRouter(LectionEdit));