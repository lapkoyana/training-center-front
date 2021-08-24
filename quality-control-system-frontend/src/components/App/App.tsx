import './App.css'
import { Link, Route, Router, Switch } from 'react-router-dom'
import LectionsContainer from '../Lections/LectionsContainer'
import LectionsEdit from '../LectionEdit/LectionEditContainer'
import React from 'react'
import Home from '../Home/Home'
import Login from '../Login/LoginContainer'
import Register from '../Register/RegisterContainer'
import { history } from '../../helpers/history'
import QuestionsContainer from '../Questions/QuestionsContainer'
import LectionsPageForStudents from '../LectionsPageForStudents/LectionsPageForStudentsContainer'
import QuizPage from '../QuizPage.tsx/QuizPageContainer'
import Answers from '../Answers/AnswersContainer'
import { CurrentUser } from '../../constants'
import { StatePropsType, DispatchPropsType } from './AppPropsTypes'

type PropsType = StatePropsType & DispatchPropsType

type StateType = {
  showLecturerBoard: boolean,
  showStudentBoard: boolean,
  currentUser: CurrentUser | undefined
}

export class App extends React.Component<PropsType, StateType> {
  state: StateType = {
    showLecturerBoard: false,
    showStudentBoard: false,
    currentUser: undefined
  }

  componentDidMount() {
    const user = this.props.currentUser;

    if (user) {
      this.setState({
        currentUser: user,
        showLecturerBoard: user.roles.includes("LECTURER"),
        showStudentBoard: user.roles.includes("STUDENT")
      });
    }
  }

  logout = () => {
    this.props.logout();
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

            <span className="nav-item">
              {showLecturerBoard && (
                  <Link to={"/lections/answers"}>
                    Посмотреть ответы
                  </Link>
                )}
            </span>

            {currentUser ? (
              <span className="nav-item">
                {currentUser.username}
                <a href="/login" onClick={this.logout}>
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
              <Route exact path='/lections/answers' component={Answers} />
              <Route exact path='/lections/:id' component={LectionsEdit} />
              <Route exact path='/lections/:id/questions' render={() => <QuestionsContainer />} />
              <Route exact path='/lessons' component={LectionsPageForStudents} />
              <Route exact path='/lessons/:id/questions' component={QuizPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}