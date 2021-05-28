import { FunctionComponent } from "react";

const Headline: FunctionComponent = ({ children }) => {
  return <h1 className="text-4xl font-medium">{children}</h1>;
};

export default Headline;
