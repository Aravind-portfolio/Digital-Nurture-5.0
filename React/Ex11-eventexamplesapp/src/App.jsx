import { useState } from "react";
import CurrencyConverter from "./Components/CurrencyConverter";

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Static Message");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br />
      <br />

      <button
        onClick={() => sayWelcome("Welcome")}
      >
        Say Welcome
      </button>

      <br />
      <br />

      <button onClick={onPress}>
        Click on me
      </button>

      <CurrencyConverter />
    </div>
  );
}

export default App;