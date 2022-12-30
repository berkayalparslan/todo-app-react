import React from 'react'
import { Task } from './Task'

export const TasksList = ({tasks, currentFilterId, onCheckboxClick}) => {
  return (
    <ul>
      {tasks.map((task) => (currentFilterId === 1 || //all tasks
        (currentFilterId === 2 && !task.completed) || //active tasks
        (currentFilterId === 3 && task.completed)) ? 
        <Task key={task.id} task={task} onCheckboxClick={onCheckboxClick} /> : ''
       )}
    </ul>
  )
}
