import React, { ChangeEvent, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../../redux/actions/auth"

import { StateType } from './../../redux/reducers/index'

type StatePropsType = {
    isLoggedIn: boolean
}

type DispatchPropsType = {
    login: (username: string, password: string) => void
}

type PropsType = StatePropsType & DispatchPropsType

type MyStateType = {
    username: string,
    password: string
}

class Login extends React.Component<PropsType, MyStateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
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

        this.props.login(this.state.username, this.state.password)
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

function mapStateToProps(state: StateType): StatePropsType {
    const { isLoggedIn } = state.auth;
    return {
      isLoggedIn,
    };
  }
  
  export default connect<StatePropsType, DispatchPropsType, {}, StateType>
    (mapStateToProps, { login })(Login);