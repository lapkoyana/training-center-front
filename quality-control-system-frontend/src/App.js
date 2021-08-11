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
import { clearMessage } from './redux/actions/message';


// адрес в Answers очень под сомнением!!!

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showLecturerBoard: false,
      showStudentBoard: false,
      currentUser: undefined
    }

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
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
          <nav>
          <Link to={"/home"}>
            Home
          </Link>
          <div>
            {showLecturerBoard && (
              <li>
                <Link to={"/lecturer"}>
                  Лекции (преп)
                </Link>
              </li>
            )}

            {showStudentBoard && (
              <li>
                <Link to={"/lessons"}>
                  Лекции (студ)
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div>
              {currentUser.username}
              <li className="nav-item">
                <a href="/login" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to={"/login"}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"}>
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          </nav>

          <div>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path='/lections' render={() => <LectionsContainer/>}/>
              <Route path='/lections/:id' component={LectionsEdit}/>
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