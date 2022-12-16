import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TasksList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <TasksList/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
