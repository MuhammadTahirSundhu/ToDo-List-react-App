import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import AddToDo from "./components/AddToDo";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [allToDo, setallToDo] = useState([]);
  const [Theme,setTheme] = useState('light');
  const [deleteFlag, setdeleteFlag] = useState(0);

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
        <div><Navbar title="ToDo List" setTheme={setTheme} Theme={Theme} setdeleteFlag={setdeleteFlag}/></div>
        <Alert type={alert.type} message={alert.message} />
        <Routes>
          <Route path="/" element={<Home Theme={Theme} setdeleteFlag={setdeleteFlag}/>} />
          <Route path="/about" element={<About Theme={Theme}/>} />
          <Route path="/Contact" element={<Contact Theme={Theme}/>} />
          <Route path="/addTodo" element={<AddToDo showAlert={showAlert} setallToDo={setallToDo} Theme={Theme} />} />
          <Route path="/myTodos" element={allToDo.length > 0 && <Todo allToDo={allToDo} Theme={Theme} deleteFlag={deleteFlag} setallToDo={setallToDo} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
