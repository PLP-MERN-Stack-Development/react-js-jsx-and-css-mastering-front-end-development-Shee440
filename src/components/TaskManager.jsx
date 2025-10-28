import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Card from './card.jsx';
import Button from './button.jsx';

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return { 
    tasks, 
    addTask, 
    toggleTask, 
    deleteTask, 
    clearCompleted 
  };
};

/**
 * TaskManager component for managing tasks with full CRUD operations
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true; // 'all' filter
    }
  });

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Task Manager
        </h1>
        
        {/* Task input form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
            />
            <Button 
              type="submit" 
              variant="primary"
              disabled={!newTaskText.trim()}
            >
              Add Task
            </Button>
          </div>
        </form>

        {/* Filter buttons and controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
            size="sm"
          >
            All ({totalTasks})
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
            size="sm"
          >
            Active ({activeTasks})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
            size="sm"
          >
            Completed ({completedTasks})
          </Button>
          
          {completedTasks > 0 && (
            <Button 
              variant="danger" 
              onClick={clearCompleted}
              size="sm"
            >
              Clear Completed
            </Button>
          )}
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {filter === 'all' 
                  ? 'No tasks yet. Add one above!' 
                  : `No ${filter} tasks found.`
                }
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 animate-fade-in transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-800 dark:text-white'
                    } transition-colors duration-200`}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </span>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(task.id)}
                    size="sm"
                    className="px-3 py-1"
                    aria-label={`Delete task: ${task.text}`}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Task statistics */}
        {totalTasks > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="flex space-x-4">
                <span>
                  <strong>{activeTasks}</strong> task{activeTasks !== 1 ? 's' : ''} remaining
                </span>
                <span>
                  <strong>{completedTasks}</strong> completed
                </span>
                <span>
                  <strong>{totalTasks}</strong> total
                </span>
              </div>
              
              {completedTasks > 0 && (
                <Button
                  variant="danger"
                  onClick={clearCompleted}
                  size="sm"
                >
                  Clear All Completed
                </Button>
              )}
            </div>
            
            {/* Progress bar */}
            {totalTasks > 0 && (
              <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(completedTasks / totalTasks) * 100}%`
                  }}
                ></div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default taskmanager;
