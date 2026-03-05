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
          <Switch
            btn1Func={() => setSwitch1(true)}
            btn2Func={() => setSwitch1(false)}
            switchValue={switch1}
          />
          <Switch
            btn1Func={() => setSwitch2(true)}
            btn2Func={() => setSwitch2(false)}
            switchValue={switch2}
          />
          <Switch
            btn1Func={() => setSwitch3(true)}
            btn2Func={() => setSwitch3(false)}
            switchValue={switch3}
          />
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
