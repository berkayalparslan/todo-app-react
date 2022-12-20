import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TasksList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    title:"task1",
    completed: false
  },
  {
    id:2,
    title:"task2",
    completed: true
  },
  {
    id:3,
    title:"task3",
    completed: false
  }]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const onCheckboxClick = (id) => {
    console.log(`checkbox clicked ${(id)}`)
    
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task)
    )
  }

  return (
    <div className="App">
      <Header/>
      <AddTask onAdd={addTask}/>
      
      <Navbar/>
      <TasksList tasks={tasks} onCheckboxClick={onCheckboxClick}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
