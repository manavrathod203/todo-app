import React, { useState } from "react";

function Task({ name, done, onToggle ,onDelete}) {
  // const [checked, setChecked] = useState(false);
  return (
    <div
      className={`text-white w-[90vw] md:w-[70vw] lg:w-[30vw]  rounded-lg p-1 flex items-center justify-between ${
        done === false
          ? "bg-zinc-700 border-2 border-zinc-600"
          : "bg-zinc-900 border-2 border-zinc-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(!done)}
          className="text-4xl p-0 text-indigo-500"
        >
          {done === false ? (
            <i className="ri-checkbox-blank-line"></i>
          ) : (
            <i className="ri-checkbox-fill text-zinc-800"></i>
          )}
        </button>
        <p
          className={`text-lg font-semibold ${
            done === false ? "" : "line-through text-zinc-600"
          }`}
        >
          {name}
        </p>
      </div>
      <i onClick={onDelete}  className="ri-delete-bin-2-fill text-2xl pr-2 text-zinc-400" />

    </div>
  );
}

export default Task;
