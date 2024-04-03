import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  // console.log(tasks);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function handleTaskDone(index, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].done = newDone;
      return newTasks;
    });
  }

  function handleTaskDelete(index) {
    setTasks((prev) => {
      let newTasks = [...prev];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  return (
    <div className="bg-zinc-900 w-full min-h-screen flex flex-col justify-start items-center gap-2 pt-10">
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          key={index}
          onToggle={(done) => handleTaskDone(index, done)}
          onDelete={() => handleTaskDelete(index)}
        />
      ))}
    </div>
  );
}

export default App;
