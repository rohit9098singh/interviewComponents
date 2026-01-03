"use client"
import { useRef, useCallback } from "react";

// custom hook with apply
function useDebounce(fn, delay) {
  const timerRef = useRef();

  const debouncedFn = useCallback(function (...args) {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      // apply ka use karke fn ko call karna
      fn.apply(this, args);
    }, delay);
  }, [fn, delay]);

  return debouncedFn;
}
 function Debounce() {
  let count = 0;

  const getData = (val) => {
    console.log(`fetching the data ${count++} : ${val}`);
  };

  const betterFunction = useDebounce(getData, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => betterFunction(e.target.value)}
        style={{ border: "1px solid black", padding: "4px", marginTop: "50px" }}
      />
    </div>
  );
}

export default Debounce

