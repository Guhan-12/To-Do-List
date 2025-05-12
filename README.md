TaskList Component

This project is a Task List application built with React. It allows users to add, remove, and rearrange tasks within a list. The component maintains its state using React's useState hook, and it provides a simple and interactive interface to manage tasks dynamically.

Features:
1. Add Task: Users can enter a task in the input field and click "Add Task" to add it to the list.
2. Remove Task: Each task has a "Remove" button to delete it from the list.
3. Reorder Tasks: Users can move tasks up or down within the list using "Move Up" and "Move Down" buttons.
4. Dynamic State Updates: The component dynamically updates the task list when tasks are added, removed, or moved, thanks to React's state management.

Technologies:
1. React: A JavaScript library for building user interfaces.
2. CSS: Custom styling for task list presentation, buttons, and layout.

How it works:
-> The component uses the useState hook to manage the list of tasks (tasks) and the value of the new task input (newTask).
-> The handleAddTask function adds the task entered in the input field to the task list when the "Add Task" button is clicked.
-> The handleRemoveTask function removes a task from the list when the "Remove" button next to it is clicked.
-> The moveTaskUp and moveTaskDown functions allow tasks to be reordered within the list by swapping their positions.
