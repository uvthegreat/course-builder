import React from "react";
import { useState } from "react";

export default function Popup(props) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = () => {
    if (!input1) return;

    props.addTask(input1, input2);
    props.setopenPopup(false);
    setInput1("");
    setInput2("");

  };
  let title, label;

  if (props.inputfieldType === "Module") {
    title = "Add a Module";
    label = "Module Name";
  } else if (props.inputfieldType === "Link") {
    title = "Add a Link";
    label = "URL";
  } else if (props.inputfieldType === "Upload") {
    title = "Upload a PDF";
    label = "PDF";
  }

  if (!props.openPopup) return null;
  return (
    <div className="fixed flex justify-center items-center h-screen w-screen backdrop-blur-xl bg-[#0401123a] -my-3 z-10">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md ">
        <h1 className="text-3xl block text-center font-semibold flex justify-between">
          <i className="fa-solid fa-user" /> {title}
          <div
            onClick={() => props.setopenPopup(false)}
            className=" cursor-pointer"
          >
            X
          </div>
        </h1>

        <hr className="mt-3" />

        <InputFeild label={label} input={input1} setInput={setInput1} />
        {props.inputfieldType === "Link" ? (
          <InputFeild
            label={"Display Name"}
            input={input2}
            setInput={setInput2}
          />
        ) : (
          ""
        )}

        <div className="mt-5">
          <button
            type="submit"
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-right-to-bracket" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function InputFeild({ label, input, setInput }) {
  return (
    <div className="mt-3">
      <label htmlFor="" className="block text-base mb-2">
        {label}
      </label>
      <input
        type="text"
        id="secontTitle"
        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        placeholder={label}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
