import React from "react";

const Sign = (props) => {
  return (
    <div className={props.className}>{props.ready ? "Go!" : "No way!"}</div>
  );
};

export default Sign;
