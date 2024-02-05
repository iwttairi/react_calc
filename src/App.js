import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");
  const handleCalculation = (number) => {
    const newResult = result + number;
    setResult(newResult);
  };
  const handleReset = () => {
    setResult("");
  }
  const execCalculation = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error!");
    }
  }
  return (
    <div className="App">
      <h1>Dentaku!!!</h1>
      <p className='string-box'>{result}</p>
      <div className='column-box'>
        <div className='row-box'>
          <button className='normal' onClick={() => handleCalculation("7")}>7</button>
          <button className='normal' onClick={() => handleCalculation("8")}>8</button>
          <button className='normal' onClick={() => handleCalculation("9")}>9</button>
          <button className='normal' onClick={() => handleCalculation("*")}>*</button>
        </div>
        <div className='row-box'>
          <button className='normal' onClick={() => handleCalculation("4")}>4</button>
          <button className='normal' onClick={() => handleCalculation("5")}>5</button>
          <button className='normal' onClick={() => handleCalculation("6")}>6</button>
          <button className='normal' onClick={() => handleCalculation("-")}>-</button>
        </div>
        <div className='row-box'>
          <button className='normal' onClick={() => handleCalculation("1")}>1</button>
          <button className='normal' onClick={() => handleCalculation("2")}>2</button>
          <button className='normal' onClick={() => handleCalculation("3")}>3</button>
          <button className='normal' onClick={() => handleCalculation("+")}>+</button>
        </div>
        <div className='row-box'>
          <button className='normal' onClick={() => handleCalculation("0")}>0</button>
          <button className='normal' onClick={() => handleCalculation(".")}>.</button>
          <button className='normal' onClick={() => handleCalculation("/")}>/</button>
          <button className='normal' onClick={() => execCalculation()}>=</button>
        </div>
        <div className='row-box'>
          <button className='reset-button' onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
