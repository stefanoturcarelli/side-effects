import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let time = 1;
    const interval = setInterval(() => {
      console.log(time++);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component re-rendered");
    };
  }, [number]);

  const increment = () => {
    setCount(count + 1);
  };

  const resetTimer = () => {
    setNumber(number + 1);
  };

  return (
    <section>
      <div className="container">
        <h2>usEffect with a dependency</h2>
        <div className="buttons">
          <button onClick={increment}>
            Count: {count.toString().padStart(2, "0")}
          </button>
          <button className="secondary" onClick={resetTimer}>
            Another action
          </button>
        </div>
      </div>
    </section>
  );
}

export default Timer;
