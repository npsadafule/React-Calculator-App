import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const resultRef = useRef(null);
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  function calculate(value) {
    if (!isNaN(value)) {
      setCurrentInput((prevInput) => prevInput + value);
    }
  }

  function handleOperation(e) {
    e.preventDefault();
    if (currentInput !== "" && !operator) {
      setResult(parseFloat(currentInput));
      setCurrentInput("");
    } else if (currentInput !== "" && operator) {
      let secondNumber = parseFloat(currentInput);
      switch (operator) {
        case "+":
          setResult(result + secondNumber);
          break;
        case "-":
          setResult(result - secondNumber);
          break;
        case "x":
          setResult(result * secondNumber);
          break;
        case "÷":
          setResult(result / secondNumber);
          break;
        default:
          setResult(secondNumber);
      }
      setCurrentInput("");
    }
    setOperator(e.target.textContent);
  }

  function handleEquals() {
    if (currentInput !== "" && operator && result !== null) {
      let secondNumber = parseFloat(currentInput);
      switch (operator) {
        case "+":
          setResult(result + secondNumber);
          break;
        case "-":
          setResult(result - secondNumber);
          break;
        case "x":
          setResult(result * secondNumber);
          break;
        case "÷":
          setResult(result / secondNumber);
          break;
        default:
          setResult(secondNumber);
      }
      setCurrentInput("");
      setOperator("");
    }
  }

  function resetResult() {
    setResult(null);
    setOperator("");
    setCurrentInput("");
  }

  return (
    <div className="calculator">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <div className="display" ref={resultRef}>
        {result !== null ? result : currentInput !== "" ? currentInput : 0}
        {operator && ` ${operator}`}
        {currentInput !== "" && operator && ` ${currentInput}`}
      </div>
      <div className="buttons">
        <button onClick={() => calculate(7)}>7</button>
        <button onClick={() => calculate(8)}>8</button>
        <button onClick={() => calculate(9)}>9</button>
        <button onClick={handleOperation} className="operator">
          +
        </button>
        <button onClick={() => calculate(4)}>4</button>
        <button onClick={() => calculate(5)}>5</button>
        <button onClick={() => calculate(6)}>6</button>
        <button onClick={handleOperation} className="operator">
          -
        </button>
        <button onClick={() => calculate(1)}>1</button>
        <button onClick={() => calculate(2)}>2</button>
        <button onClick={() => calculate(3)}>3</button>
        <button onClick={handleOperation} className="operator">
          x
        </button>
        <button onClick={resetResult}>C</button>
        <button onClick={() => calculate(0)}>0</button>
        <button onClick={handleEquals} className="equal">
          =
        </button>
        <button onClick={handleOperation} className="operator">
          ÷
        </button>
      </div>
    </div>
  );
}

export default App;
