import React, { ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { addOrUpdateLection, setCurrentLection } from '../../../redux/actions/lesson';
import { StateType } from './../../../redux/reducers/index'
import { LectionsType } from './../../../redux/type'

type StatePropsType = {
    currentLection: LectionsType
}

type DispatchPropsType = {
    addOrUpdateLection: (currentMethod: string, formData: any, currentLection: any) => void,
    setCurrentLection: (lectionId: number)  => void
}

type PathParamType = {lectionId: string}

type PropsType = StatePropsType & DispatchPropsType & RouteComponentProps<PathParamType>

type MyStateType = {
    id?: number | undefined
    topic: string,
    dateOfClass: string,
    lectureFile: string | Blob,
    signOfCompleteness: boolean
}

class LectionEdit extends React.Component<PropsType, MyStateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            id: 0,
            topic: '',
            dateOfClass: '',
            lectureFile: '',
            signOfCompleteness: false
          };
    }

    componentDidMount() {
        if (this.props.match.params.lectionId !== 'new'){
            this.props.setCurrentLection(Number.parseInt(this.props.match.params.lectionId))
        }
    }

    handleTopic = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({topic: e.target.value});
    }

    handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({dateOfClass: e.target.value});
    }
    
    handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        this.setState({lectureFile: e.target.files[0]});
    }

    handleSign = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({signOfCompleteness: e.target.checked});
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentLection = this.state;

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
                    <input type="text" name="topic" onChange={this.handleTopic} value={currentLection.topic || ''}/>
                </label></div>
                <div><label>
                    Дата:
                    <input type="date" name="dateOfClass" onChange={this.handleDate} value={currentLection.dateOfClass || ''}/>
                </label></div>
                <div><label>
                    Файл:
                    <input type="file" name="lectureFile" onChange={this.handleFile} />
                </label></div>
                <div><label>
                    Признак завершенности:
                    <input type="checkbox" name="signOfCompleteness" onChange={this.handleSign} checked={currentLection.signOfCompleteness}/>
                </label></div>
                <input type="submit" value="ОК" />
            </form>
        )
    }
}

const mapStateToProps = (state: StateType): StatePropsType => {
    return {
        currentLection: state.lesson.currentLection
    }
}

export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { addOrUpdateLection, setCurrentLection }) (withRouter(LectionEdit));