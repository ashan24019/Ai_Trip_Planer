import React from 'react'

function Header() {
  return (
    <header className="flex items-center p-4 bg-white shadow-md">
      <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-1" />
      <span className="text-xl font-semibold">AI Trip Planner</span>
    </header>
  )
}

export default Header
