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

  const [filters,setFilters] = useState([
    {id:1, name: 'All', active: true}, 
    {id:2, name: 'Active', active:false}, 
    {id:3, name: 'Completed', active:false}]);

  const [currentFilterId, setCurrentFilter] = useState(1);

  const addTask = (task) => {
    setTasks([...tasks, task])
  };

  const onCheckboxClick = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task)
    )
  }

  const filterTasks = (id) => {
    //filter tasks
    setCurrentFilter(id);
    //update filters
    setFilters(filters.map(filter => filter.active = false ));
    setFilters(filters.map(filter => filter.id === id ? {...filter, active: !filter.active} : filter ));  
  }

  return (
    <div className="App">
      <Header/>
      <AddTask onAdd={addTask}/>
      
      <Navbar tasksCount={tasks.length} filters={filters} onFilterSelect={filterTasks}/>
      <TasksList currentFilterId={currentFilterId} tasks={tasks} onCheckboxClick={onCheckboxClick}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
