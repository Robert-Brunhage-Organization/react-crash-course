import React, { useEffect, useRef, useState } from "react";
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
      <Headline>Todo list</Headline>
      <div className="flex space-x-2">
        <Input ref={nameRef}></Input>
        <Button onClick={() => addTodo()}>Add todo</Button>
      </div>
      <Todos todos={todos} removeTodo={removeTodo}></Todos>
    </div>
  );
}

export default App;
