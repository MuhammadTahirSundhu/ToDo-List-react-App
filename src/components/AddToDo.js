import React from "react";
import MainTitle from "./MainTitle";
import { useState } from "react";
import Footer from "./Footer";

export default function AddToDo(props) {
  const textColor = props.Theme === 'dark' ? 'white' : 'black'; 
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

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
    props.setallToDo((prevToDos) => {
      const updatedToDos = [...prevToDos, newTask];
      localStorage.setItem("allToDo", JSON.stringify(updatedToDos));
      return updatedToDos;
    });

    setTaskTitle("");
    setTaskDescription("");
    props.showAlert("Task Added", "success");
  }

  return (
    <>
      <div className="container my-5"style={{color:textColor}}>
        <div>
          <MainTitle title="Enter ToDo Details" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="HomeWork"
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
            placeholder="This task is for ..."
            value={taskDescription}
            onChange={taskDescriptionHandle}
          ></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button" onClick={addToDo}>
            Add ToDo
          </button>
        </div>
      </div>
      <Footer Theme={props.Theme} />

    </>
  );
}
