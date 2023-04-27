import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleKeyPress = (event) => {
    setResult((prevState) => {
      const calculator = calculate(prevState, event.target.textContent);
      return { ...prevState, ...calculator };
    });
  };

  return (
    <>
      <div className="calculator">
        <p className="outputResult">
          {result.total}
          {result.next}
          {result.operation}
        </p>
        <div className="buttonContainer">
          {buttons.map((button) => (
            <button type="button" className="calcButtons" key={button} onClick={handleKeyPress}>{button}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
