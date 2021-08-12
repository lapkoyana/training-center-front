import './App.css';
import { Link, Route, Router, Switch } from 'react-router-dom';
import LectionsContainer from './components/Lections/LectionsContainer';
import LectionsEdit from './components/Lections/LectionsEdit/LectionsEdit';
import React from 'react';
import { logout } from './redux/actions/auth';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { history } from './helpers/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showLecturerBoard: false,
      showStudentBoard: false,
      currentUser: undefined
    }
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showLecturerBoard: user.roles.includes("LECTURER"),
        showStudentBoard: user.roles.includes("STUDENT")
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showLecturerBoard, showStudentBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="App-header">
            <div className="navbar">
            <span className="nav-item">
              <Link to={"/home"}>
                Главная
              </Link>
            </span>
            <span className="nav-item">
              {showLecturerBoard && (
                <Link to={"/lections"}>
                  Лекции (преп)
                </Link>
              )}

              {showStudentBoard && (
                <Link to={"/lessons"}>
                  Лекции (студ)
                </Link>
              )}
            </span>

            {currentUser ? (
              <span className="nav-item">
                {currentUser.username}
                <a href="/login" onClick={this.logOut}>
                  Выйти
                </a>
              </span>
            ) : (
              <span className="nav-item">
                <Link to={"/login"}>
                  Вход
                </Link>

                <Link to={"/register"}>
                  Регистрация
                </Link>
              </span>
            )}
            </div>
          </nav>

          <div className="App-content">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path='/lections' render={() => <LectionsContainer />} />
              <Route path='/lections/:id' component={LectionsEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return { user };
}

export default connect(mapStateToProps)(App);