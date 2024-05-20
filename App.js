import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;
const TitleComponent = () => {
  return (
    <h1 className="head" tabIndex="5">
      {elem}
      Title
    </h1>
  );
};

const HeadingComponent = () => {
  const number = 100;
  return (
    <div id="container">
      <h2>{number + 200}</h2>
      <TitleComponent />
      <h1 className="heading">Hello World</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
