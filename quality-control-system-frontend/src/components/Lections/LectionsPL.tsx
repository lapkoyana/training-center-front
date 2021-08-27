import React from 'react';
import LectionsList from "./LectionsList/LectionsList";
import { StatePropsType, DispatchPropsType } from './ILections'
import LectionsService from '../../services/LectionsService';

type PropsType = StatePropsType & DispatchPropsType

export class Lections extends React.Component<PropsType> {
    componentDidMount() {
        this.setLections();
    }

    setLections = async () => {
        return await LectionsService.getLessons()
            .then(response => response.json())
            .then(data =>
                this.props.setLections(data)
            )
    }

    remove = (lectionId: number) => {
        // this.props.deleteLection(lectionId!);
        LectionsService.delete(lectionId)
            .then(() => {
                this.props.setLections(this.props.lections.filter(l => l.id !== lectionId))
            })

        // this.props.setLections(this.props.lections.filter(l => l.id !== lectionId));
        // LectionsService.delete(lectionId);
    }

    setCurrentLection = async (lectionId: number) => {
            return await LectionsService.getLesson(lectionId)
                .then(response => response.json())
                .then(data => 
                    this.props.setCurrentLection(data)
                )
        };

    render() {
        return <LectionsList lections={this.props.lections}
            delete={this.remove}
            setCurrentLection={this.setCurrentLection} />
    }
}