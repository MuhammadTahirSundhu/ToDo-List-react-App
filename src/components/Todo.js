import React from "react";
import MainTitle from "./MainTitle";

export default function Todo({ allToDo }) {
  if ({ allToDo }.length <= 0) {
    alert("No Todo Task Exsist!!!!!!!");
    return null;
  }

  return (
    <>
      <MainTitle title="My ToDo's" />
      <div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {allToDo.map((todo, index) => (  // Map always want a return in each iteration which makes sure by the arow function "() implicit" and "{} explicit".
              <div className="col" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      #{index+1}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
