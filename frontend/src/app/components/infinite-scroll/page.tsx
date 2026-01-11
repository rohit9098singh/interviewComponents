"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import InfiniteScroll from "./component/InfiniteScroll";

const LIMIT = 10;

type Product = {
  id: number;
  title: string;
};

const Scroll = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [query, setQuery] = useState("");

  const getData = async (page: number, q: string) => {
    if (!q.trim()) return;

    try {
      setLoading(true);
      const skip = (page - 1) * LIMIT;

      const res = await fetch(
        `https://dummyjson.com/products/search?q=${q}&limit=${LIMIT}&skip=${skip}`
      );
      const data = await res.json();

      // append for infinite scroll
      setProducts((prev) =>
        page === 1 ? data.products : [...prev, ...data.products]
      );

      setHasMore(
        (page - 1) * LIMIT + data.products.length < data.total
      );
    } finally {
      setLoading(false);
    }
  };

  // runs when query changes
  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      setHasMore(false);
      return;
    }

    setPageNumber(1);
    setHasMore(true);
    getData(1, query);
  }, [query]);

  return (
    <div className="min-h-screen bg-green-100 text-black p-10">
      <input
        className="border p-3 rounded w-full max-w-md"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      <InfiniteScroll<Product>
        listData={products}
        renderItem={(item) => <p key={item.id}>{item.title}</p>}
        getData={getData}
        query={query}
        page={pageNumber}
        setPage={setPageNumber}
        hasMore={hasMore}
        loading={loading}
      />
    </div>
  );
};

export default Scroll;



