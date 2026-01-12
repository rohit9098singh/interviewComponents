// import React, { useEffect, useRef } from "react";

// type InfiniteScrollProps<T> = {
//   listData: T[];
//   renderItem: (item: T) => React.ReactNode;
//   getData: (pageNumber: number, query: string) => void | Promise<void>;
//   query: string;
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
//   hasMore: boolean;
//   loading: boolean;
// };

// const InfiniteScroll = <T,>({
//   listData,
//   renderItem,
//   getData,
//   query,
//   page,
//   setPage,
//   hasMore,
//   loading,
// }: InfiniteScrollProps<T>) => {
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!hasMore || loading) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           const nextPage = page + 1;
//           setPage(nextPage);
//           getData(nextPage, query); // ✅ FIX
//         }
//       },
//       { threshold: 1 }
//     );

//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }

//     return () => observer.disconnect(); // ✅ FIX
//   }, [page, hasMore, loading, query]);

//   return (
//     <div>
//       {listData.map(renderItem)}

//       {hasMore && <div ref={observerRef} style={{ height: 20 }} />}

//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default InfiniteScroll;


import React, { useEffect, useRef } from 'react'

type InfiniteScrollProps<T> = {
  listData: T[],
  renderItem: (item: T) => React.ReactNode,
  getData: (page: number, query: string) => void | Promise<void>
  query: string,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
  loading: boolean,
  hasMore: boolean
}

const InfiniteScroll = <T,>(
  {
    listData,
    renderItem,
    getData,
    query,
    page,
    setPage,
    loading,
    hasMore,
  }: InfiniteScrollProps<T>
) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (loading || !hasMore) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const nextPage = page + 1;
        setPage(nextPage);
        getData(nextPage, query)
      }
    }, {
      threshold: 1
    })
    if (observerRef.current) {
      observer.observe(observerRef.current)
    }
    return () => observer.disconnect()
  }, [loading, hasMore, query, page])
  return (
    <div>
      {
        listData.map(renderItem)
      }
      {
        hasMore && <div ref={observerRef} style={{ height: "40px" }} />
      }
      {
        loading && <p>loading..........</p>
      }
    </div>
  )
}

export default InfiniteScroll



