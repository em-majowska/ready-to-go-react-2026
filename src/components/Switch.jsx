import React from "react";
import Button from "./Button";

const Switch = (props) => {
  return (
    <div className="switch">
      <Button
        text="ON"
        onClick={() => props.setSwitch(true)}
        className={props.switchValue ? "selected" : "unselected"}
      />
      <Button
        text="OFF"
        onClick={() => props.setSwitch(false)}
        className={props.switchValue ? "unselected" : "selected"}
      />
    </div>
  );
};

export default Switch;
