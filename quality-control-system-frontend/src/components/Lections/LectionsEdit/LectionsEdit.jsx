import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setLections, addOrUpdateLection, setCurrentLection } from '../../../redux/actions/lesson';

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

    componentDidMount() {
        if (this.props.match.params.id !== 'new'){
            this.props.setCurrentLection(this.props.match.params.id)
                .then((data) => this.setState(data));
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

        this.props.addOrUpdateLection( currentMethod, formData, currentLection );

        this.props.history.push("/lections");
        window.location.reload();
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

export default connect(null,{setLections, addOrUpdateLection, setCurrentLection }) (withRouter(LectionEdit));