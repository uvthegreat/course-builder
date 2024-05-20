import React from "react";
import Dropdown from "./Dropdown";

export default function Header(props) {
  return (
    <>
        <div className="flex justify-between items-baseline my-3">
          <span className="h-3 font-bold text-blue-400">Course Builder</span>
          <Dropdown 
          setopenPopup={props.setopenPopup}
          inputfieldType={props.inputfieldType} 
          setinputfieldType={props.setinputfieldType}
          />
        </div>
     
    </>
  );
}
