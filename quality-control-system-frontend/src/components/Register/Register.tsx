import React, { ChangeEvent, FormEvent } from 'react';
import AuthenticationService from '../../services/AuthenticationService';

type StateType = {
    username: string,
    password: string,
    firstName: string,
    lastName: string
}

export class Register extends React.Component<{}, StateType> {
    state: StateType = {
        username: "",
        password: "",
        firstName: "",
        lastName: ""
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

    onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            firstName: e.target.value,
        })
    }

    onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lastName: e.target.value,
        })
    }

    handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        AuthenticationService.register(this.state.username, this.state.password,
            this.state.firstName, this.state.lastName)
        window.location.reload()
    }

    render() {
        return <form onSubmit={this.handleRegister}>
                <div>
                    <div><label>
                    Логин:
                    <input type="text" name="username" onChange={this.onChangeUsername} value={this.state.username}/>
                </label></div>
                <div><label>
                    Имя:
                    <input type="text" name="firstName" onChange={this.onChangeFirstName} value={this.state.firstName}/>
                </label></div>
                <div><label>
                    Фамилия:
                    <input type="text" name="lastName" onChange={this.onChangeLastName} value={this.state.lastName}/>
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

export default Register