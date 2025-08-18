import React, { useState } from "react";
import "./Calculator.css"; // optional if you want to move CSS to a separate file

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Simple eval calculation
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      {/* Display */}
      <input
        type="text"
        className="calculator-display"
        value={input}
        readOnly
      />

      {/* Buttons */}
      <div className="calculator-buttons">
        {/* First row */}
        <button className="clear" onClick={clearInput}>
          C
        </button>
        <button onClick={backspace}>⌫</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>

        {/* Numbers and operators */}
        {[7, 8, 9].map((n) => (
          <button key={n} onClick={() => handleClick(n.toString())}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("*")}>×</button>

        {[4, 5, 6].map((n) => (
          <button key={n} onClick={() => handleClick(n.toString())}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("-")}>−</button>

        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => handleClick(n.toString())}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>

        {/* Last row */}
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

