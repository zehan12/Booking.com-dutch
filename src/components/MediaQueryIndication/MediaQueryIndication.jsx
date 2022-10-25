import { Fragment } from "react";

const MediaQueryIndication = ({ breakPoint }) => {
  return (
    <Fragment>
      <div className="App">
        <h1 style={{ backgroundColor: "black", color: "white" }}>
          Display View:{" "}
          {breakPoint === "mobile"
            ? "Moblie"
            : breakPoint === "tablet"
            ? "Tablet"
            : breakPoint === "laptop"
            ? "Laptop"
            : breakPoint === "desktop"
            ? "Desktop"
            : "None"}
          - width {window.innerWidth}
        </h1>
      </div>
    </Fragment>
  );
};

export default MediaQueryIndication;
