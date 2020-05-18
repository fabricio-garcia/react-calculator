import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

function App() {
  return (
    <div id="app">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
