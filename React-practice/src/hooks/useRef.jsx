import { useRef, useState } from "react";
const References = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function Increment() {
    countRef.current++;
    setCount(count + 1);
    console.log("Count state:", count);
    console.log("Count ref:", countRef);
  }

  return (
    <div className="App">
      <p>Count State is: {count}</p>
      <p>CountRef is: {countRef.current}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default References;
