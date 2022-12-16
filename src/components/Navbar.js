import React from 'react'

export const Navbar = () => {
  return (
    <div id='navbar'>
        <form action="">
        <input type="text" name="" id="" placeholder='Search'/>
        <input type="submit" value="search" className='btn'/>
        </form>
        
        <div id='filters'>
            <button className="filter filter-selected">All</button>
            <button className="filter">Active</button>
            <button className="filter">Completed</button>
        </div>
    </div>
  )
}
