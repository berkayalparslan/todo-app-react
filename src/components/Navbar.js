import React from 'react'
import { FilterButton } from './FilterButton'

export const Navbar = ({filters, onFilterSelect, tasksCount}) => {
  return (
    <div id='navbar'>
        <form action="">
        <input type="text" name="" id="" placeholder='Search'/>
        <input type="submit" value="search" className='btn'/>
        </form>
        <h6>{tasksCount} task(s) found.</h6>
        
        <div id='filters'>
          {filters.map((filter) => (
            <FilterButton key={filter.id} filter={filter} onFilterSelect={onFilterSelect}/>
          ))}
        </div>
    </div>
  )
}
