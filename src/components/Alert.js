import React, { useContext } from "react";
import { themeContext } from "..";
export default function Alert(props) {
  const [Theme,setTheme] = useContext(themeContext);
  const textColor = Theme === 'dark' ? 'white' : 'black'; 

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
