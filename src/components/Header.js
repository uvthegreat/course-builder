import React from "react";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <>
        <div className="flex justify-between items-baseline">
          <span className="h-3 font-bold text-blue-400">Course Builder</span>
          <Dropdown />
        </div>
     
    </>
  );
}
