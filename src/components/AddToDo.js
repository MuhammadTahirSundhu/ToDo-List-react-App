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
      <div>
        <MainTitle title="Enter ToDo Details" />
      </div>
      <div className="container">
        <div className="mb-3 my-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Task# 01"
            value={taskTitle}
            onChange={taskTitleHandle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="This task is for ....."
            value={taskDescription}
            onChange={taskDescriptionHandle}
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={addToDo}>
            Add To List
          </button>
        </div>
      </div>
      <div>{allToDo.length > 0 && <Todo allToDo={allToDo} />}</div>
    </>
  );
}
