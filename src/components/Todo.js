import React from "react";
import MainTitle from "./MainTitle";

export default function Todo({allToDo}) {
  return (
    <>
      <MainTitle title="My ToDo's"/>
      <div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{allToDo.title}</h5>
                  <p className="card-text">{allToDo.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
