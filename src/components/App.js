import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });


  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  
  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
