"use client"
import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleClick = () => {
        if(input.trim() === "") return ;
        const item = {
            id: todoList.length + 1,
            task: input.trim(),
            completed: false
        }
        setTodoList((prev) => [...prev, item]);
        setInput("");
    }

    const toggleCompleted = (id) => {
        setTodoList(todoList.map((t) => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        }));
    }

    const handleDelete = (id) => {
        setTodoList(todoList.filter((t) => t.id !== id));
    }

    return (
        <div className='flex flex-col gap-3 justify-center items-center mt-20'>
            <div>
                <input
                    type="text"
                    className='border border-gray-600 max-w-lg rounded-md p-2'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleClick}
                    className='bg-gray-500 text-white p-2 rounded-md cursor-pointer ml-2'>
                    Add
                </button>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-5 '>
                {
                    todoList.map((todo) => (
                        <li key={todo.id} className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleCompleted(todo.id)}
                            />
                            <span className={todo.completed ? "line-through" : ""}>
                                {todo.task}
                            </span>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className='bg-red-400 px-3 rounded-md py-1 text-white cursor-pointer'>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
