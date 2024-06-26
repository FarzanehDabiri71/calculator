import { useState } from "react";
import "./App.css";
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operators = ["÷", "x", "-", "+"];
function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);
  const handleClick = (value) => {
    // setDisplay(value);
    setExpression([...expression, value]);
  };
  const handleResult = () => {
    const result = expression
      .join("") // Joining 'expression' into a single string
      .split(/(\D)/g) // Splitting by non-digit characters (operators)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value)) // Mapping to convert digits back to numbers
      .reduce((acc, value, index, array) => {
        switch (
          value // Reducing the array based on operators
        ) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "*":
            return (acc = acc * array[index + 1]);
          case "/":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression(""); // Resetting 'expression'
  };
  const handleClear = () => {
    // Event handler to clear 'display' and 'expression'
    setDisplay("");
    setExpression([]);
  };
  return (
    <div className="App">
      <h3 className="display">{display}</h3>
      <span className="expression">{expression}</span>
      <section className="panel">
        {/* numbers */}
        <section className="numbers">
          {numbers.map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleClear}>C</button>
        </section>
        {/* operators */}
        <section className="operators">
          {operators.map((op, index) => (
            <button key={index} onClick={() => handleClick(op)}>
              {op}
            </button>
          ))}
          <button onClick={() => handleResult()}>=</button>
        </section>
      </section>
    </div>
  );
}

export default App;
