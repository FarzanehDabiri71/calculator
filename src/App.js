import "./App.css";

function App() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["÷", "x", "-", "+"];
  const handleClick = () => {};
  const handleResult =()=>{}
  return (
    <div className="App">
      <h3 className="display"></h3>
      <span className="expression"></span>
      <section className="panel">
        {/* numbers */}
        <section className="numbers">
          {numbers.map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
              {number}
            </button>
          ))}
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
