import { useRef, useCallback } from "react";

function useDebounce(fn, delay) {
  const timerRef = useRef(null);

  const debouncedFn = useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFn;
}




const Debounce = () => {
  let count = 0;

  const getData = async (e) => {
    const query = e.target.value;
    if (!query) return;
    console.log(`API Call #${++count} with query: ${query}`);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${query}`
    );

    const data = await response.json();
    console.log("Response Data:", data);
  };

  const debouncedGetData = useDebounce(getData, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => debouncedGetData(e)}
      />
    </div>
  );
}

export default Debounce
