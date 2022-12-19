import React, { useState } from 'react'

export const AddTask = ({onAdd}) => {
  const [title,setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title){
      alert('text empty')
      return
    }

    onAdd({title})
  }

  return (
    <form action="" onSubmit={onSubmit}>
    <input id='add-task' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Add New Task'/>
    <input id='add-task-btn' className='btn' type="submit" value="Add Task"/>
    </form>
  )
}
