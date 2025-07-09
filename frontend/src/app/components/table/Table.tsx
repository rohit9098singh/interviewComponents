"use client"
import { Divide } from 'lucide-react';
import React, { useState } from 'react'

const data = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 23 },
    { id: 4, name: "David", age: 24 },
    { id: 5, name: "Eva", age: 21 },
    { id: 6, name: "Frank", age: 26 },
    { id: 7, name: "Grace", age: 27 },
    { id: 8, name: "Henry", age: 22 },
    { id: 9, name: "Ivy", age: 23 },
    { id: 10, name: "Jack", age: 24 },
    { id: 11, name: "Kelly", age: 25 },
];


const Table = () => {
    const [currentPage, setCurrentPage] = useState("1");
    const [sortedOrder, setSortedOrder] = useState("asc")
    const [sortItem, setSortItem] = useState("id");
    const [rowsPerPage, setRowsPerPage] = useState("5");

    const sortedData = [...data].sort((a, b) => {
        if (a[sortItem] < b[sortItem]) return sortedOrder === "asc" ? "-1" : "1"
        if (a[sortItem] > b[sortItem]) return sortedOrder === "asc" ? "1" : "-1"
    }) 

    const handleSort = (item) => {
        if (item === sortItem) {
            setSortedOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortItem(item);
            setSortedOrder("asc");
        }
    };


    const totalProduct = data.length;
    const totalPages = Math.ceil(totalProduct / rowsPerPage);
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = sortedData.slice(start, end)
    return (
        <div className='bg-green-100 min-h-screen justify-center items-center p-8'>
            <div className='flex flex-col gap-4 max-w-4xl items-center'>
                <h1 className='text-center font-bold text-2xl'>Table</h1>
                <table className='table-auto  border w-full '>
                    <thead className='bg-gray-300'>
                        <tr>
                            <th
                                onClick={() => handleSort("id")}
                                className='px-4 py-2 cursor-pointer'>
                                Id {sortItem === "id" ? (sortedOrder === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th
                                onClick={() => handleSort("name")}
                                className='px-4 py-2 cursor-pointer'>
                                Name : {sortItem === "name" ? (sortedOrder === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th
                                onClick={() => { handleSort("age") }}
                                className='px-4 py-2 cursor-pointer'>
                                Age:{sortItem === "age" ? (sortedOrder === "asc" ? "↑" : "↓") : ""}
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white hover:bg-gray-200 text-center'>
                        {
                            paginatedData.map((data, index) => (
                                <tr key={index}>
                                    <td className='border py-2'>
                                        {data.id}
                                    </td>
                                    <td className='border py-2'>
                                        {data.name}
                                    </td>
                                    <td className='border py-2'>
                                        {data.age}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    rowsPerPage < data.length && (
                        <div className="flex justify-center gap-2 mt-4">
                            {[...Array(totalPages).keys()].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page + 1)}
                                    className={`px-3 py-1 border rounded ${currentPage === page + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {page + 1}
                                </button>
                            ))}
                        </div>
                    )
                }
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() =>
                            setRowsPerPage((prev) => (prev === 5 ? data.length : 5))
                        }
                        className='px-4 py-2 bg0-gray-400'
                    >
                        {rowsPerPage === 5 ? "Show More" : "Show Less"}
                    </button>
                </div>

            </div>
        </div >
    )
}

export default Table
