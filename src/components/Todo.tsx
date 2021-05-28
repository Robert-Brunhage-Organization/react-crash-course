import { FunctionComponent } from "react";
import { TrashIcon } from "@heroicons/react/outline";

interface TodoProps {
  value: string;
  index: number;
  removeTodo: (index: number) => void;
}

const Todo: FunctionComponent<TodoProps> = ({ value, index, removeTodo }) => {
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
};

export default Todo;
