import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Action from './components/ButtonComponents/ActionButton';
import Numbers from './components/ButtonComponents/NumberButton'


const App = () => {
  return (
    <div>
      <div className="display">
        <Display />
      </div>
      <div className="TopRow">
        <Action action="Clear" />
        <Numbers number="÷" />
      </div>
      <div className="row2">
        <Numbers number="7" />
        <Numbers number="8" />
        <Numbers number="9" />
        <Numbers number="X" />
      </div>
      <div className="Row3">
        <Numbers number="4" />
        <Numbers number="5" />
        <Numbers number="6" />
        <Numbers number="-" />
      </div>
      <div className="row4">
        <Numbers number="1" />
        <Numbers number="2" />
        <Numbers number="3" />
        <Numbers number="+" />
      </div>
      <div className="row5">
        <Action action="0" />
        <Numbers number="=" />
      </div>
    </div>
  );
};

export default App;
