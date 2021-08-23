import React from 'react';
import LectionsList from "./LectionsList/LectionsList";
import { StatePropsType, DispatchPropsType } from './LectionsPropsTypes'

type PropsType = StatePropsType & DispatchPropsType

export class Lections extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setLections();
    }

    remove = (lectionId: number) => {
        this.props.deleteLection(lectionId!);
    }

    setCurrentLection = (lectionId: number) => {
        this.props.setCurrentLection(lectionId);
    }

    render() {
        return <LectionsList lections={this.props.lections}
                         delete={this.remove}
                         setCurrentLection={this.setCurrentLection}/>
    }
}