import React, { useState } from 'react'
import { FilterButton } from './FilterButton'

export const Navbar = ({filters, onFilterSelect, tasksCount, onSearchPhraseSet}) => {
  return (
    <div id='navbar'>
        <input type="text" onChange={(e) => onSearchPhraseSet(e.target.value)} placeholder='Search'/>
        <h6>{tasksCount} task(s) found.</h6>
        
        <div id='filters'>
          {filters.map((filter) => (
            <FilterButton key={filter.id} filter={filter} onFilterSelect={onFilterSelect}/>
          ))}
        </div>
    </div>
  )
}
