"use client"
import React, { useState } from 'react'

const Practice = () => {
    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([]);
    const handleChange = () => {
        const item = {
            id: todoList.length + 1,
            task: input,
            completed: false,
        }
        setTodoList((prev) => [...prev, item])
        setInput("");
    }

    const handleToggle = (id) => {
        setTodoList(todoList.map((t) => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            } else {
                return t;
            }
        }));
    }

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter(t => t.id !== id))
    }
    return (
        <div className='flex flex-col items-center justify-center mt-20 gap-3'>
            <div >
                <input
                    type="text"
                    className='border border-gray-900 p-2 max-w-lg rounded-md'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => handleChange()} className='bg-gray-600 text-white p-2 rounded-md'>Add</button>
            </div>
            <ul className=' list-disc pl-5'>
                {
                    todoList.map((todo) => (
                        <li key={todo.id} className='flex gap-2 items-center'>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                            <span className={todo.completed ? "line-through" : ""}>{todo.task}</span>
                            <button
                                onClick={() => { handleDeleteTodo(todo.id) }}
                                className=' rounded-md bg-gray-800 text-white px-3 py-1 text-center'>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Practice
