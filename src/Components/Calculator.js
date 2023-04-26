import React, { useState } from 'react';
//  import calculate from '../logic/calculate';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="calculator">
        <p className="outputResult">{count}</p>
        <div className="buttonContainer">
          {buttons.map((button) => (
            <button type="button" className="calcButtons" key={button} onClick={handleClick}>{button}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
