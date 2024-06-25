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
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
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
    setExpression("");
  };
  const handleClear =()=>{
    setDisplay("")
    setExpression([])
  }
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
