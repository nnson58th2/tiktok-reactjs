import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  const [counter, setCounter] = useState(() => {
    const totalOrder = orders.reduce((total, current) => total + current);

    return totalOrder;
  });

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
