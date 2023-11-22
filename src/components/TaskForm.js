import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
