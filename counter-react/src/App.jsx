import "./App.css";

export default function App() {
  const count = 0;
  
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button>+</button>
      <button>&minus;</button>
      <button>Reset</button>
    </div>
  );
}
