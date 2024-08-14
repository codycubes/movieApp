import React from 'react'

const Footer = () => {
  return (
    <div>
          {/* Footer */}
          <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">Enter-Stream</div>
          <nav className="flex space-x-4">
            <a href="/" className="hover:text-gray-400">Movies</a>
            <a href="/" className="hover:text-gray-400">Series</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer
