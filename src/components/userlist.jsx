import React, { useState, useMemo } from 'react'
import { useApi } from '../hooks/useAPI.js'
import Card from './card.jsx'
import Button from './button.jsx'

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const usersPerPage = 8

  const { data: users, loading, error } = useApi('https://jsonplaceholder.typicode.com/users')

  const filteredUsers = useMemo(() => {
    if (!users) return []
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [users, searchTerm])

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  )

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Card>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Card>
          <div className="text-center py-8">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Error Loading Users
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{error}</p>
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Users from API
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentUsers.map(user => (
            <Card
              key={user.id}
              className="text-center animate-slide-up"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  {user.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                {user.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {user.email}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {user.company.name}
              </p>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No users found matching your search.
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

export default UsersList