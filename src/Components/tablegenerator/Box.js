import React from "react";
import "./Tablet.css";

import { createSelectable } from "react-selectable-fast";

function Box(props) {
  const { selectableRef, isSelected, isSelecting } = props;

  return (
    <div
      ref={selectableRef}
      className="box"
      style={{
        background: isSelected
          ? `${props.color}`
          : isSelecting
          ? ""
          : `background: linear-gradient(#e66465, #9198e5)`,
      }}
    ></div>
  );
}

export default createSelectable(Box);
