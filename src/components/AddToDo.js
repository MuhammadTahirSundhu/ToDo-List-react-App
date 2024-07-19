import React from "react";
import MainTitle from "./MainTitle";
import { useState, useEffect } from "react";
import Todo from "./Todo";

export default function AddToDo() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [allToDo, setallToDo] = useState([]);

  function taskTitleHandle(event) {
    setTaskTitle(event.target.value);
  }

  function taskDescriptionHandle(event) {
    setTaskDescription(event.target.value);
  }

  function addToDo(event) {
    const newTask = {
      title: taskTitle,
      description: taskDescription,
    };

    // the below will save the data in localStorage every time alltodo array will change
    setallToDo((prevToDos) => {
      const updatedToDos = [...prevToDos, newTask];
      localStorage.setItem("allToDo", JSON.stringify(updatedToDos));
      return updatedToDos;
    });

    setTaskTitle("");
    setTaskDescription("");
  }

  // the below code means that every time the page will refresh it will check initally that 'allToDo' key name data is stored or not on local storage.
  useEffect(() => {
    let storedData = localStorage.getItem("allToDo");
    if (storedData) {
      setallToDo(JSON.parse(storedData));
      console.log(allToDo);
      console.log("Data get from Local Storage");
    }
  }, []);

  return (
    <>
      <div><MainTitle title="Enter ToDo Details" /></div>
      <div>{allToDo.length > 0 && <Todo allToDo={allToDo} />}</div>
    </>
  );
}
