import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Aquí podrías utilizar localStorage para guardar/obtener las tareas
        // Ejemplo: const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        // setTasks(storedTasks || []);
    }, []);

    const addTask = (name) => {
        const newTask = {
            id: tasks.length + 1,
            name,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        // Aquí podrías guardar en localStorage las tareas actualizadas
        // Ejemplo: localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    };

    const completeTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        // Actualizar localStorage si se está utilizando
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        // Actualizar localStorage si se está utilizando
    };

    return (
        <div className="app">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                completeTask={completeTask}
                deleteTask={deleteTask}
            />
            <footer className="footer">
                <div className="multiline-text">
                    Grupo 3: Adriana Villafañe(21992626),
                    <br />
                    Viviana Lopez(18445270),
                    <br />
                    Edmundo Molina(17219543),
                    <br />
                    Angel Aberbach(18123292) UTN 2023
                </div>
            </footer>
        </div>
    );
};

export default App;