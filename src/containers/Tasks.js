import React from "react";
import TaskInput from "../templates/TaskInput";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState(["fry the butter", "heat the pan"]);

  const tasksList = tasks.map((task) => {
    return <h2>{task}</h2>;
  });
  return (
    <div>
      this is the tasks container
      <TaskInput />
      {tasksList}
    </div>
  );
};

export default Tasks;
