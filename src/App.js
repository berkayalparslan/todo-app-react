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
  }])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <Header/>
      <AddTask onAdd={addTask}/>
      
      <Navbar/>
      <TasksList tasks={tasks}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
