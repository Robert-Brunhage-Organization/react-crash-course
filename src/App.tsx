import React, { useEffect, useRef, useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import Headline from "./components/Headline";
import Input from "./components/Input";
import Button from "./components/Button";
import Todos from "./components/Todos";
export const TODO_KEY = "TODOS";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const jsonTodos = localStorage.getItem(TODO_KEY);
    if (jsonTodos) setTodos(JSON.parse(jsonTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const name = nameRef.current?.value ?? "";
    if (name === "") return;
    setTodos([...todos, name]);
    if (nameRef.current) {
      nameRef.current.value = "";
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center space-y-8 pt-40">
      <h1 className="text-4xl font-medium">Todo List</h1>
      <div className="flex space-x-2">
        <input
          data-testid="todo-input"
          className="border rounded py-2 px-4"
          ref={nameRef}
          type="text"
        />
        <button
          className="bg-indigo-500 py-2 px-4 rounded text-white hover:bg-indigo-700"
          onClick={() => addTodo()}
        >
          Add todo
        </button>
      </div>
      {todos.map((value, index) => {
        return (
          <div className="flex justify-between w-80">
            <p>{value}</p>
            <TrashIcon
              data-testid={`delete-${value}`}
              className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-700"
              onClick={() => removeTodo(index)}
            ></TrashIcon>
          </div>
        );
      })}
    </div>
  );
}

export default App;
