import React from 'react';
import {Header} from './component/Header';
import AddUniver from './component/AddUniver';
import UniversContainer from './component/UniversContainer';



function App(props) {
  return (
    <div className="App">
      <Header />
      <UniversContainer />
      {/* <AddUniver /> */}
    </div>
  );
}

export default App;
