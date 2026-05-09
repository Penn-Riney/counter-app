import "./App.css";
import { useState, useEffect } from "react"; // 👀 Import useState

export default function App() {
  const [count, setCount] = useState(0); // 👀 Replace let count = 0
 
  // 👀 Add this effect
  useEffect(() => {
    console.log("count changed to:", count);
  }, [count]);
  function increment() {
    setCount(count + 1); // 👀 Use setCount instead of count =
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
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
