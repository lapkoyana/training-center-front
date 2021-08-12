import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../../redux/actions/auth"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
          });
    }

    handleLogin(e) {
        e.preventDefault();

        this.props.login(this.state.username, this.state.password)
        .then(() => {
            this.props.history.push("/");
            window.location.reload();
        })
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

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    return {
      isLoggedIn,
    };
  }
  
  export default connect(mapStateToProps, { login })(Login);