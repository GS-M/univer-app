import React from 'react';
import {Header} from './components/Header';
import AddUniver from './components/AddUniversity';
import UniversContainer from './components/UniversContainer';
import AddUniversity from './components/AddUniversity';



function App(props) {
  return (
    <div className="App">
      <Header />
      <UniversContainer />
      <AddUniversity />
    </div>
  );
}

export default App;
