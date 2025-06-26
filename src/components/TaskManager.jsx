import React, { useState, useEffect } from 'react';
import Button from './Button';
import useLocalStorage from '../utils/useLocalStorage';

const FILTERS = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('lessons', [
    { text: 'Lesson 1: React Basics' },
    { text: 'Lesson 2: Using Hooks' },
    { text: 'Lesson 3: Styling with Tailwind' },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  // Add a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input }]);
      setInput('');
    }
  };

  // Toggle task completion status
  const toggleTask = (idx) => {
    setTasks(
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(FILTERS[filter]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded shadow w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Lessons</h2>
      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new lesson"
            className="flex-1 px-2 py-1 rounded border dark:bg-gray-700"
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        {Object.keys(FILTERS).map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Task list */}
      <ul>
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 dark:text-gray-400">No tasks</li>
        )}
        {filteredTasks.map((task, idx) => (
          <li
            key={idx}
            className="py-1 border-b border-gray-200 dark:border-gray-700"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
              onClick={() => toggleTask(tasks.indexOf(task))}
            >
              {task.text}
            </span>
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteTask(tasks.indexOf(task))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;