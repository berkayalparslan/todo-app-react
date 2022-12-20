import React from 'react'
import { Task } from './Task'

export const TasksList = ({tasks, onCheckboxClick}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onCheckboxClick={onCheckboxClick} />
      ))}
    </ul>
  )
}
