import React from "react";

export default function Alert(props) {
  const textColor = props.Theme === 'dark' ? 'white' : 'black'; 

  if (props.message === "") return;
  return (
    <>
      <div >
        <div
          className={`alert alert-${props.type} d-flex align-items-center`}
          role="alert"
        >
          <div>{props.message}</div>
        </div>
      </div>
    </>
  );
}
