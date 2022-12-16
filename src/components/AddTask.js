import React from 'react'

export const AddTask = () => {
  return (
    <form action="">
    <input id='add-task' type="text" placeholder='Add New Task'/>
    <input id='add-task-btn' className='btn' type="submit" value="+" />
    </form>
  )
}
