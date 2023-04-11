import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Pokes from './Pokes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <div className="bg-gray-700 p-6 md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Pokedex
        </h2>
      </div>
    </div>
    <Pokes />
  </React.StrictMode>,
)
