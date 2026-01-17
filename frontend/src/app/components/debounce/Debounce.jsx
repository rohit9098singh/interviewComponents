"use client";
import { useRef, useCallback, useState } from "react";
import PostList from "./components/PostList";

/* ------------------ Debounce Hook ------------------ */
function useDebounce(fn, delay) {
  const timerRef = useRef(null);

  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => fn(...args), delay);
    },
    [fn, delay]
  );

  return debouncedFn;
}

const Debounce = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const countRef = useRef(0);

  const getData = async (e) => {
    const value = e.target.value;

    if (!value) {
      setPosts([]);
      return;
    }
    
    setQuery(value);

    

    console.log(`API Call #${++countRef.current} with query: ${value}`);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${value}`
    );
    const data = await res.json();

    setPosts(data);
  };

  const debouncedGetData = useDebounce(getData, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={debouncedGetData}
      />

      <PostList posts={posts} query={query} />
    </div>
  );
};

export default Debounce;
