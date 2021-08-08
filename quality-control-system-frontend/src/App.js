import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Answers from './components/Answers/Answers';
import LectionsContainer from './components/Lections/LectionsContainer';
import LectionsEdit from './components/Lections/LectionsEdit/LectionsEdit';

// адрес в Answers очень под сомнением!!!

const App = () => {
  return (
    <div>
      <div className="App-header">
        <Navbar/>
      </div>
      <div className="App-content">
        <Route exact path='/lections' render={() => <LectionsContainer/>}/>
        <Route path='/lections/{lessonId}/user/{user}/answers' render={() => <Answers/>}/>
        <Route path='/lections/:id' component={LectionsEdit}/>
      </div>
    </div>
  );
}

export default App;
