import React, {useState} from "react";
import {Button, Modal} from "../index";

const ModalExample: React.FunctionComponent = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={(e) => {setVisible(true)}}>{"点我"}</Button>
      <Modal type={"Alert"} visible={visible} content={"modal"} onClose={() => {
        setVisible(false)
      }}/>
    </div>
  );
};

export default ModalExample;
