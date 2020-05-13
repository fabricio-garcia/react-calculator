import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div id="app">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
