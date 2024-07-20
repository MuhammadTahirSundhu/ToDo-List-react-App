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

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [allToDo, setallToDo] = useState([]);

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

    // the below code means that every time the page will refresh it will check initally that 'allToDo' key name data is stored or not on local storage.
    useEffect(() => {
      let storedData = localStorage.getItem("allToDo");
      if (storedData) {
        setallToDo(JSON.parse(storedData));
        showAlert("Previous tasks load from local storage","primary");
      }
    }, []);

  return (
    <>
    <Router>
          <div><Navbar title="ToDo List" /></div>
          <Alert type={alert.type} message={alert.message} />
         <Routes>

          <Route path="/Home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/addTodo" element={<AddToDo showAlert={showAlert} setallToDo={setallToDo} />} />
          <Route path="/myTodos" element={allToDo.length > 0 && <Todo allToDo={allToDo} />} />

         </Routes>
    </Router>
    </>
  );
}

export default App;
