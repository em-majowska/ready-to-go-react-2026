import { useState } from "react";
import Button from "./Button";
import Sign from "./Sign";
import Switch from "./Switch";

const Item = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <div className="top">
        <div className="switches">
          <Switch setSwitch={setSwitch1} switchValue={switch1} />
          <Switch setSwitch={setSwitch2} switchValue={switch2} />
          <Switch setSwitch={setSwitch3} switchValue={switch3} />
        </div>
        <Sign
          text={switch1 && switch2 && switch3 ? "Go!" : "No way!"}
          className={switch1 && switch2 && switch3 ? "sign green" : "sign red"}
        />
      </div>
      <div className="bottom">
        <Button
          className="red"
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
          text="Reset"
        />
      </div>
    </div>
  );
};

export default Item;
