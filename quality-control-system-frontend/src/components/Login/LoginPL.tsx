import React, { ChangeEvent, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../../services/AuthenticationService';

import { StatePropsType, DispatchPropsType } from './ILogin'

type PropsType = StatePropsType & DispatchPropsType

type StateType = {
    username: string,
    password: string
}

export class Login extends React.Component<PropsType, StateType> {
    state: StateType = {
        username: "",
        password: ""
    }

    onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value,
          });
    }

    handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthenticationService.login(this.state.username, this.state.password).then(
            (data) => {
                this.props.setCurrentUser(data)
                this.props.setIsLoggedIn(true)
            })
        window.location.reload();
    }

    render() {
        const { isLoggedIn } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <form onSubmit={this.handleLogin}>
                <div><label>
                    Логин:
                    <input type="text" name="username" onChange={this.onChangeUsername} value={this.state.username}/>
                </label></div>
                <div><label>
                    Пароль:
                    <input type="text" name="password" onChange={this.onChangePassword} value={this.state.password}/>
                </label></div>
                <input type="submit" value="ОК" />
            </form>
        )
    }
}