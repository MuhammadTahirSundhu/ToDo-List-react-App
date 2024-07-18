import "./App.css";
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <>
    
    <div><Navbar title="ToDo List"/></div>
    <AddToDo />
    </>
  );
}

export default App;
