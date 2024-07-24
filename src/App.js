import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import AddToDo from "./components/AddToDo";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import React, { useEffect, useState ,useContext} from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import UseFetchTodos from "./components/UseFetchTodos";
import { themeContext } from "./index";
import { deleteToDoContext } from "./index";
function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [allToDo, setallToDo] = useState([]);
  const [Theme,setTheme] = useContext(themeContext);
  const [deleteFlag, setdeleteFlag] = useContext(deleteToDoContext);

  const showAlert = (message, type) => {
    const newAlert = {
      message: message,
      type: type,
    };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert("", "");
    }, 2000);
  };

  useEffect(() => {
    let storedData = localStorage.getItem("allToDo");
    if (storedData) {
      setallToDo(JSON.parse(storedData));
      showAlert("Previous tasks load from local storage", "primary");
    }
    
  }, []);

  useEffect(()=>{
    document.body.style.backgroundColor = Theme === 'dark' ? 'black' : 'white';
    console.log(deleteFlag)
  },[Theme]);
    
  return ( 
    <>
    {/* {localStorage.clear()} */}
      <Router>
        <div><Navbar title="ToDo List" /></div>
        <Alert type={alert.type} message={alert.message} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/addTodo" element={<AddToDo showAlert={showAlert} setallToDo={setallToDo} />} />
          <Route path="/myTodos" element={allToDo.length > 0 && <Todo setallToDo={setallToDo} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
