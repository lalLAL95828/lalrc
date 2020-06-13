import React from 'react';
import { mdiAccountAlert } from '@mdi/js'
import MdiIcon from './components/Icon/icon';
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <MdiIcon path={mdiAccountAlert} />
    </div>
  );
}

export default App;
