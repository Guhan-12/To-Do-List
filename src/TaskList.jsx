import { useState } from "react";

function TaskList() {
    const [tasks, setTask] = useState(["Playing", "BAthing", "Sleeping"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        // const newTask = document.getElementById("taskInput").value;
        // document.getElementById("taskInput").value = "";

        setTask(prevTask => [...prevTask, newTask]);
        setNewTask("");
    }

    const handleRemoveTask = (index) => {
        setTask(tasks.filter((_, i) => i !== index));
    }

    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        <div className="task-container">
            <h2 style={{fontSize: '40px', textAlign: 'center'}}>List of Tasks</h2>
            <input type="text" id="taskInput" value={newTask} onChange={handleInputChange} placeholder="Enter the task...."></input>
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map((element, index) => 
                <li key={index}>{element}
                <button onClick={() => handleRemoveTask(index)}>Remove Task</button>
                <button onClick={() => moveTaskUp(index)}>Move Up</button>
                <button onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>
                )}
            </ul>
        </div>
    );
}
export default TaskList