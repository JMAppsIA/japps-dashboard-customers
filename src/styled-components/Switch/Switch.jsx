import React from "react";
import { SwitchInput, SwitchLabel, SwitchSpan } from ".";
import Colors from "../../constants/Colors";

const Switch = ({ switchId, isOn, handleToggle }) => {
  return (
    <>
      <SwitchInput
        id={switchId}
        checked={isOn}
        onChange={handleToggle}
        type="checkbox"
      />
      <SwitchLabel htmlFor={switchId} style={{ background: isOn && Colors.success }}>
        <SwitchSpan />
      </SwitchLabel>
    </>
  );
};

export default Switch;
