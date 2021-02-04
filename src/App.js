import React from 'react';
import UniversContainer from './components/UniversityPage/UniversContainer';
import CurrentUniverContainer from './components/CurrentUniver/CurrentUniverContainer';
import { Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import CurrentStudentContainer from './components/CurrentStudent/CurrentStudentContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Preloader/>
        <Route path='/university' render={() => (<UniversContainer />)} />
        <Route path='/currentUni' render={() => (<CurrentUniverContainer />)} />
        <Route path='/currentStudent' render={() => (<CurrentStudentContainer />)} />
      </div>
    );
  }
}

export default App;
