// "use client";

// import React, { ChangeEvent, useEffect, useState } from "react";
// import InfiniteScroll from "./component/InfiniteScroll";

// const LIMIT = 10;

// type Product = {
//   id: number;
//   title: string;
// };

// const Scroll = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(false);
//   const [query, setQuery] = useState("");

//   const getData = async (page: number, q: string) => {
//     if (!q.trim()) return;

//     try {
//       setLoading(true);
//       const skip = (page - 1) * LIMIT;

//       const res = await fetch(
//         `https://dummyjson.com/products/search?q=${q}&limit=${LIMIT}&skip=${skip}`
//       );
//       const data = await res.json();

//       // append for infinite scroll
//       setProducts((prev) =>
//         page === 1 ? data.products : [...prev, ...data.products]
//       );

//       setHasMore(
//         (page - 1) * LIMIT + data.products.length < data.total
//       );
//     } catch (error) {
//       console.log(error)
//     }
//     finally {
//       setLoading(false);
//     }
//   };

//   // runs when query changes
//   useEffect(() => {
//     if (!query.trim()) {
//       setProducts([]);
//       setHasMore(false);
//       return;
//     }

//     setPageNumber(1);
//     setHasMore(true);
//     getData(1, query);
//   }, [query]);

//   return (
//     <div className="min-h-screen bg-green-100 text-black p-10">
//       <input
//         className="border p-3 rounded w-full max-w-md"
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//           setQuery(e.target.value)
//         }
//       />

//       <InfiniteScroll
//         listData={products}
//         renderItem={(item) => <p key={item.id}>{item.title}</p>}
//         getData={getData}
//         query={query}
//         page={pageNumber}
//         setPage={setPageNumber}
//         hasMore={hasMore}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default Scroll;

"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import InfiniteScroll from './component/InfiniteScroll'

type productProps = {
  id: string,
  title: string
}
const LIMIT = 10

const page = () => {
  const [productData, setProductData] = useState<productProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1)

  const getData = async (page: number, query: string) => {
    if (!query.trim()) {
      return;
    }
    try {
      setIsLoading(true)
      const skip = (page - 1) * LIMIT
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${LIMIT}&skip=${skip}`)
      const data = await response.json();
      setProductData((prev) => (
        pageNumber === 1 ? data.products : [...prev, ...data.products]
      ))
      setHasMore((page - 1) * LIMIT + data.products.length < data.total)

    } catch (error) {
      console.log("we encountered  the error", error)
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!query.trim()) {
      setProductData([])
      setIsLoading(false);
      setHasMore(false)
      return
    }
    setPageNumber(1);
    setHasMore(true);
    getData(1, query);

  }, [query])

  return (
    <div className='min-h-screen bg-green-50 p-10'>
      <input
        type="text"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        className='rounded-md border border-gray-400 p-4'
      />
      <InfiniteScroll
        listData={productData}
        renderItem={(item) => <p key={item.id}>{item.title}</p>}
        getData={getData}
        query={query}
        page={pageNumber}
        setPage={setPageNumber}
        loading={isLoading}
        hasMore={hasMore}
      />
    </div>
  )
}

export default page
