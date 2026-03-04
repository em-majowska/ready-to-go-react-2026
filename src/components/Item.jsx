import { useState } from "react";
import Button from "./Button";
import Sign from "./Sign";

const Item = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <div className="switches">
        <div className="col-1">
          <Button
            text="ON"
            onClick={() => {
              if (switch1) return;
              setSwitch1(!switch1);
            }}
            className={switch1 ? "selected" : "unselected"}
          />
          <Button
            text="ON"
            onClick={() => {
              if (switch2) return;
              setSwitch2(!switch2);
            }}
            className={switch2 ? "selected" : "unselected"}
          />
          <Button
            text="ON"
            onClick={() => {
              if (switch3) return;
              setSwitch3(!switch3);
            }}
            className={switch3 ? "selected" : "unselected"}
          />
        </div>
        <div className="col2">
          <Button
            text="OFF"
            onClick={() => {
              if (!switch1) return;
              setSwitch1(!switch1);
            }}
            className={switch1 ? "unselected" : "selected"}
          />
          <Button
            text="OFF"
            onClick={() => {
              if (!switch2) return;
              setSwitch2(!switch2);
            }}
            className={switch2 ? "unselected" : "selected"}
          />
          <Button
            text="OFF"
            onClick={() => {
              if (!switch3) return;
              setSwitch3(!switch3);
            }}
            className={switch3 ? "unselected" : "selected"}
          />
        </div>
      </div>
      <Sign
        ready={switch1 && switch2 && switch3}
        className={switch1 && switch2 && switch3 ? "sign green" : "sign red"}
      />
    </div>
  );
};

export default Item;
