import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';

class Register extends React.Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {
            username: "",
            password: "",
            successful: false
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }

    handleRegister(e) {
        e.preventDefault();

        this.props.dispatch(
            register(this.state.username, this.state.password)
        )
        .then(() => {
            this.setState({
                successful: true,
            });
        })
        .catch(() => {
            this.setState({
                successful: false,
            });
        });
    }

    render() {
        return <form onSubmit={this.handleRegister}>
            {!this.state.successful && (
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
            )}
            <input type="submit" value="ОК" />
        </form>
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
      message,
    };
  }
  
  export default connect(mapStateToProps)(Register);