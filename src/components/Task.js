import React from 'react'

export const Task = ({task}) => {
  return (
    <li>
        <input type="checkbox" name="task" checked={task.completed}/>
        <span>task.title</span>
    </li>
  )
}
