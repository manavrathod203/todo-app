import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white w-[90vw] md:w-[70vw] lg:w-[30vw] border-2 border-zinc-600 rounded-lg p-1 flex items-center gap-1"
    >
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        className="px-3 py-1 text-lg rounded-md bg-zinc-800 w-full focus:outline-none"
        placeholder="New task ..."
      />
      <button  className="px-3 py-1 text-lg bg-indigo-500 rounded-md font-semibold">
        +
      </button>
    </form>
  );
}

export default TaskForm;
