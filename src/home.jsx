import React from 'react'
import { Link } from 'react-router-dom'
import Card from './components/card.jsx'
import Button from './components/button.jsx'

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
          Welcome to <span className="text-blue-600">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A modern, responsive task management application built with React and Tailwind CSS. 
          Manage your tasks efficiently and explore user data from JSONPlaceholder API.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg px-8 py-3">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="secondary" className="text-lg px-8 py-3">
              Explore Users
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Task Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create, complete, and organize your tasks with an intuitive interface. 
              Filter by status and persist your data locally.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Toggle between light and dark themes. Your preference is saved 
              automatically for future visits.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              API Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore user data from JSONPlaceholder API with search, 
              pagination, and responsive grid layout.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Responsive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">React 18</div>
              <div className="text-gray-600 dark:text-gray-400">Modern Hooks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Tailwind</div>
              <div className="text-gray-600 dark:text-gray-400">CSS Framework</div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Home