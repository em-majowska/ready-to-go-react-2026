import React from "react";
import Button from "./Button";

const Switch = (props) => {
  return (
    <div className="switch">
      <Button
        text="ON"
        onClick={props.btn1Func}
        className={props.switchValue ? "selected" : "unselected"}
      />
      <Button
        text="OFF"
        onClick={props.btn2Func}
        className={props.switchValue ? "unselected" : "selected"}
      />
    </div>
  );
};

export default Switch;
