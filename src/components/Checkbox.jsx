import { useState, useEffect } from "react";

// The useEffect Hook
// We use useEffect when a render needs to cause side effects. Think of a side
// effect as somehting that a function does that it isn't part of the return

// Example: A network request

function Checkbox() {
  const [condition, setCondition] = useState(false);

  // In its basic form, useEffect accepts a function and runs it after every
  // render is completed. The following code runs twice becasuse of the
  // '<React.StrictMode>' component in the 'src/index.js' file. It activates
  // additional checks and warnings for its descendants. This only happens in
  // development mode.
  useEffect(() => {
    // console.log(condition ? "Checked" : "Unchecked");
  });

  return (
    <section>
      <div className="container">
        <h2>Side effects with the useEffect Hook</h2>
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            value={condition}
            onChange={() => setCondition(!condition)}
          />
          <label htmlFor="checkbox">
            {condition ? "Checked" : "Unchecked"}
          </label>
        </div>
      </div>
    </section>
  );
}

export default Checkbox;
