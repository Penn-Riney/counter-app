import "./App.css";

export default function App() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log("count is now:", count);
  }

  function decrement() {
    count = count - 1;
    console.log("count is now:", count);
  }

  function reset() {
    count = 0;
    console.log("count is now:", count);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
