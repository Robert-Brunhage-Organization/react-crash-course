import { FunctionComponent } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-indigo-500 py-2 px-4 rounded text-white hover:bg-indigo-700"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
