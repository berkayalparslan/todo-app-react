import React from 'react'

export const Task = ({task, onCheckboxClick}) => {
  return (
    <li>
        <input type="checkbox" name="task" checked={task.completed} onChange={() => onCheckboxClick(task.id)}/>
        <span>task.title</span>
    </li>
  )
}
