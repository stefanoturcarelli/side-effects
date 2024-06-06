import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let time = 1;
    const interval = setInterval(() => {
      console.log(time++);
    }, 1000);

    // The useEffect function returns the clearInterval function with the
    // scheduled interval passed into it. As a result, the interval is
    // correctly cleared and no longer triggers every second time after
    // the component unmounts from the DOM (before a new render, for example)

    // useEffect depends on 'number' as a dependency. This means that the
    // interval is cleared and reset every time 'number' changes. This is
    // useful when you want to clear the interval when the component is
    // unmounted or when a specific value changes.

    // An empty array instead of '[number]' would cause the interval to
    // be cleared only when the component is unmounted. This is useful
    // when you want to clear the interval only when the component is
    // removed from the DOM.

    // Passing no array at all would cause the interval to be cleared
    // every time the component re-renders. This is useful when you want
    // to clear the interval every time a specific value changes

    return () => {
      clearInterval(interval);
      console.log("Component re-rendered");
    };

    // No dependency: Timer is recreate every time the component renders
    // Empty array: Timer is created once when the component mounts
    // and never recreated
    // [number]: An array with a stateful variable causes the timer to
    // be recreated every time the stateful variable changes, when the value
    // changes

    // PS: Don't forget that useEffect always runs at least once
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
