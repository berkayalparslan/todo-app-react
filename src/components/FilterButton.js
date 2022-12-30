import React from 'react'

export const FilterButton = ({filter, onFilterSelect}) => {
  return (
    <button className={`filter ${filter.active ? 'filter-selected' : ''}`} onClick={() => onFilterSelect(filter.id)}>
        {filter.name}
    </button>
  )
}
