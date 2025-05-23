"use client";
import React, { useRef, useState } from "react";

const TodoListpartTwo = () => {
  const [inputValue, setInputvalue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState("");
  const timerRefs = useRef({});

  const handleInputValueChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleAddTodoList = () => {
    if (inputValue === "") {
      setMessage("Please enter the todo for appearing into the list");
      return;
    }

    setTodoList((prev) => [
      ...prev,
      { text: inputValue, time: 0, isRunning: false },
    ]);
    setInputvalue("");
    setMessage("");
  };

  const handleStartStop = (index) => {
    const updatedTodos = [...todoList];
    const todo = updatedTodos[index];

    if (todo.isRunning) {
      clearInterval(timerRefs.current[index]);
      timerRefs.current[index] = null;
    } else {
      timerRefs.current[index] = setInterval(() => {
        setTodoList((prev) => {
          const newTodos = [...prev];
          newTodos[index].time += 1;
          return newTodos;
        });
      }, 1000);
    }

    todo.isRunning = !todo.isRunning;
    setTodoList(updatedTodos);
  };

  const handleReset = (index) => {
    clearInterval(timerRefs.current[index]);
    timerRefs.current[index] = null;
    const updatedTodos = [...todoList];
    updatedTodos[index].time = 0;
    updatedTodos[index].isRunning = false;
    setTodoList(updatedTodos);
  };

  const handleDelete = (index) => {
    clearInterval(timerRefs.current[index]);
    const updatedTodos = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodos);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-400 font-semibold text-2xl">
          Todo List With Timer
        </h1>
        <p>
          Build a Todo list where each task has its own timer that can be
          started, paused, and reset
        </p>
        <div className="max-w-3xl p-2 rounded-lg bg-white shadow-md flex flex-col gap-4">
          <h1 className="text-semibold text-gray-600 text-center text-2xl">
            Todo with Timer
          </h1>
          <div className="flex border flex-row gap-2 p-3">
            <input
              value={inputValue}
              onChange={handleInputValueChange}
              type="text"
              className="p-2 flex-grow border border-gray-400 rounded-md"
            />
            <button
              onClick={handleAddTodoList}
              className="w-30 bg-blue-500 rounded-md py-4 px-2 cursor-pointer"
            >
              Add
            </button>
          </div>
          {message && <p className="text-red-500">{message}</p>}
          {todoList.length === 0 ? (
            <p>no todo yet</p>
          ) : (
            <div className="flex flex-col gap-2">
              {todoList.map((todo, index) => (
                <div
                  key={index}
                  className="mt-3 bg-gray-100 shadow-lg rounded-lg p-3 flex-grow"
                >
                  <p className="bg-green-300 rounded-md p-3 font-bold">
                    {todo.text}
                  </p>
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="text-lg">{formatTime(todo.time)}</p>
                    <div className="flex flex-row gap-3">
                      <button
                        onClick={() => handleStartStop(index)}
                        className="bg-green-500 p-2 px-3 py-1 rounded-md"
                      >
                        {todo.isRunning ? "Pause" : "Start"}
                      </button>
                      <button
                        onClick={() => handleReset(index)}
                        className="bg-red-500 p-2 px-3 py-1 rounded-md"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-gray-500 p-2 px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoListpartTwo;
