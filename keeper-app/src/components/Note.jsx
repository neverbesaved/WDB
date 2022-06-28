import React from "react";

const Note = () => {
  return (
    <div className="bg-[#fff] rounded-[7px] shadow-[0_2px_5px_[#ccc]] p-[10px] w-[240px] m-4 float-left">
      <h1 className="text-[1.1em] mb-[6px]">Note</h1>
      <p className="text-[1.1em] mb-[10px] whitespace-pre-wrap break-words">desciprtion</p>
    </div>
  );
};

export default Note;
