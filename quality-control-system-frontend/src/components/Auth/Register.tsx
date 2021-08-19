import React, { ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';


type DispatchPropsType = {
    register: (username: string, password: string) => void
}

type MyStateType = {
    username: string,
    password: string,
}

class Register extends React.Component<DispatchPropsType, MyStateType> {
    constructor(props: DispatchPropsType) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
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
  
  export default connect<{}, DispatchPropsType, {}, null>
    (null, {register} )(Register);