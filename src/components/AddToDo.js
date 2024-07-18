import React from "react";
import MainTitle from "./MainTitle";
import { useState } from "react";
import Todo from "./Todo";

export default function AddToDo() {

  const [taskTitle,setTaskTitle] = useState("");
  const [taskDescription,setTaskDescription] = useState("");
  const [allToDo,setallToDo] = useState([]);

  function taskTitleHandle(event){
    setTaskTitle(event.target.value);
  }

  function taskDescriptionHandle(event){
    setTaskDescription(event.target.value);
  }

  function addToDo(event){
    const newTask = {
      title:taskTitle,
      description:taskDescription
    }

    setallToDo([...allToDo,newTask]);
    setTaskTitle("");
    setTaskDescription("");
    <Todo allToDo={allToDo}/>
  }
 

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
    </>
  );
}
