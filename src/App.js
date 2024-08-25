import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(''); // State for calculator display

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
      return;
    }

    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error'); 
      }
      return;
    }

   
    setDisplay(display + value);
  };

  return (
    <>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleClick('AC')} className="span-two">AC</button>
          <button onClick={() => handleClick('DEL')}>DEL</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('=')} className="span-two">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
