import { Fragment, FunctionComponent } from "react";
import Todo from "./Todo";

interface TodosProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const Todos: FunctionComponent<TodosProps> = ({ todos, removeTodo }) => {
  return (
    <Fragment>
      {todos.map((value, index) => {
        return (
          <Todo
            key={value}
            index={index}
            value={value}
            removeTodo={removeTodo}
          ></Todo>
        );
      })}
    </Fragment>
  );
};

export default Todos;
