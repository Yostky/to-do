import './App.css';
import TaskList from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';
import AppContextProvider from './context';

const App = () => {
  return (
    <div className="App ">
      <div className='margin2 lg-font-size'>To-do App</div>
      <AppContextProvider>
        <TaskList/>
        <div className='line margin2'></div>
        <TodoItem/>
      </AppContextProvider>
    </div>
  );
}

export default App;
