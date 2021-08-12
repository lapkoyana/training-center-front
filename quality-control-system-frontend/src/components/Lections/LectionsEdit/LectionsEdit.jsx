import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setLections, setCurrentLection, addLection, editLection } from '../../../redux/actions/lesson';
import LectionsService from '../../../services/LectionsService';

class LectionEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            topic: '',
            dateOfClass: '',
            lectureFile: null,
            signOfCompleteness: false
          };
    }
    
    // this.setState({
    //     title: e.target.value
    //   });

    componentDidMount() {
        if (this.props.match.params.id !== 'new'){
            LectionsService.getLesson(this.props.match.params.id)
                .then(response => response.json())
                .then(data => this.setState(data)); // СДЕЛАЛА
        }
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;

        let currentLection = this.state;
        
        if (target.type === "checkbox"){
            const checked = target.checked;
            currentLection[name] = checked;
            this.setState({currentLection});
        } else if (target.type === "file"){
            const file = target.files[0];
            currentLection[name] = file;
            this.setState({currentLection});
        } else {
            const value = target.value;
            currentLection[name] = value;
            this.setState({currentLection});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {currentLection} = this.state;

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

        LectionsService.createOrUpdateLesson(currentMethod, formData)
        if (currentLection.id){
            this.props.editLection(currentLection);
        } else {
            this.props.addLection(currentLection);
        }
        this.props.history.push('/lections');
    }

    render() {
        const currentLection = this.state;

        return(
            <form id="formData" onSubmit={this.handleSubmit}>
                <div><label>
                    Тема:
                    <input type="text" name="topic" onChange={this.handleChange} value={currentLection.topic || ''}/>
                </label></div>
                <div><label>
                    Дата:
                    <input type="date" name="dateOfClass" onChange={this.handleChange} value={currentLection.dateOfClass || ''}/>
                </label></div>
                <div><label>
                    Файл:
                    <input type="file" name="lectureFile" onChange={this.handleChange} />
                </label></div>
                <div><label>
                    Признак завершенности:
                    <input type="checkbox" name="signOfCompleteness" onChange={this.handleChange} checked={currentLection.signOfCompleteness? 'checked' : ''}/>
                </label></div>
                <input type="submit" value="ОК" />
            </form>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         currentLection: state.lesson.currentLection
//     }
// }

export default connect(null,{setLections, setCurrentLection, addLection, editLection}) (withRouter(LectionEdit));