import React from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <button className="button"onClick={handleComplete}>Complete</button>
      <button className="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
