import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <button>Search</button>
        <input type="search" name="" id="" />
        <div id='filters'>
            <div className="filter active">All</div>
            <div className="filter">Active</div>
            <div className="filter">Completed</div>
        </div>
    </div>
  )
}
