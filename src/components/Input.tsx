import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <input
      data-testid="todo-input"
      className="border rounded py-2 px-4"
      ref={ref}
      type="text"
    />
  );
});

export default Input;
