import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './Themecontext.jsx';
import Layout from './components/layout.jsx';
import Home from './home.jsx';
import TaskManager from './components/taskmanager.jsx';
import UsersList from './components/userlist.jsx';

/**
 * Main App component with routing and theme management
 */
function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900' : 'bg-gray-100'
    }`}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </Layout>
    </div>
  );
}

// Alternative version with inline components (commented out for reference)
/*
function AlternativeApp() {
  const [count, setCount] = useState(0);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
    }`}>
      
      {/* Navbar Section */
/*}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              PLP Task Manager
            </h1>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-4">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Home
                </a>
                <a href="/tasks" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Tasks
                </a>
                <a href="/users" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Users
                </a>
              </nav>
              <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */
/*}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section with Counter */
/*}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Welcome to PLP Task Manager
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            {/* Interactive Counter */
/*}
            <div className="flex items-center gap-4 my-6">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105 active:scale-95 font-semibold"
              >
                Decrement -
              </button>
              <span className="text-3xl font-bold text-gray-800 dark:text-white min-w-[60px] text-center">
                {count}
              </span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105 active:scale-95 font-semibold"
              >
                Increment +
              </button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              This is a demo counter. Implement your full TaskManager component in the dedicated page.
            </p>
          </div>
        </div>
        
        {/* Task Manager Preview */
/*}
        <div className="mb-8">
          <TaskManager />
        </div>
        
        {/* API Data Section */
/*}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            API Data Integration
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Fetch and display data from JSONPlaceholder API
          </p>
          <UsersList />
        </div>
      </main>

      {/* Footer Section */
/*}
      <footer className="bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                PLP Task Manager
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A modern task management application built with React and Tailwind CSS.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/tasks" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Task Manager</a></li>
                <li><a href="/users" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Users API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✅ Task Management</li>
                <li>🌙 Dark Mode</li>
                <li>📱 Responsive Design</li>
                <li>🔗 API Integration</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
*/

export default App;
