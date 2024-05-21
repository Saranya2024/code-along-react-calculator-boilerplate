import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClearAll = () => {
    setDisplay('');
    setError('');
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setError('Error');
    }
  };

  return (
    <div className="calculator">
  <input type="text" readOnly value={error || display} />
  <div className="button-container">
    <div className="buttons">
      <button className="span-two" onClick={handleClearAll}>AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={() => handleClick('/')}>÷</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('*')}>x</button>
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
      <button className="span-two" onClick={handleEqual}>=</button>
    </div>
  </div>
</div>

  );
}

export default Calculator;
