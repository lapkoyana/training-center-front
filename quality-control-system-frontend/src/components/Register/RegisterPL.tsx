import React, { ChangeEvent, FormEvent } from 'react';
import { DispatchPropsType } from './IRegister'

type StateType = {
    username: string,
    password: string,
}

export class Register extends React.Component<DispatchPropsType, StateType> {
    state: StateType = {
        username: "",
        password: "",
    }

    onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        this.props.register(this.state.username, this.state.password)
    }

    render() {
        return <form onSubmit={this.handleRegister}>
                <div>
                    <div><label>
                    Логин:
                    <input type="text" name="username" onChange={this.onChangeUsername} value={this.state.username}/>
                </label></div>
                <div><label>
                    Пароль:
                    <input type="text" name="password" onChange={this.onChangePassword} value={this.state.password}/>
                </label></div>
            </div>
            <input type="submit" value="ОК" />
        </form>
    }
}