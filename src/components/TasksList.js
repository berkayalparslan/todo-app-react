import React from 'react'
import { Task } from './Task'

export const TasksList = ({tasks, currentFilterId, currentSearchPhrase, onCheckboxClick}) => {

  if(currentSearchPhrase){ 
    return (
      <ul>
        {tasks.map((task) => (currentFilterId === 1 || //all tasks
          (currentFilterId === 2 && !task.completed) || //active tasks
          (currentFilterId === 3 && task.completed)) // completed tasks
          ? currentSearchPhrase ? task.title.includes(currentSearchPhrase) ?
          <Task key={task.id} task={task} onCheckboxClick={onCheckboxClick} /> : '' : '' : ''
         )}
      </ul>
    )
  }
  else{
    return(<ul>
      {tasks.map((task) => (currentFilterId === 1 || //all tasks
        (currentFilterId === 2 && !task.completed) || //active tasks
        (currentFilterId === 3 && task.completed)) // completed tasks
        ?
        <Task key={task.id} task={task} onCheckboxClick={onCheckboxClick} /> : ''
       )}
    </ul>)
    
  }
  
}
