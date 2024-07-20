import React from "react";
import MainTitle from "./MainTitle";

function About(props) {
    const textColor = props.Theme === 'dark' ? 'white' : 'black'; 

  return (
    <div  style={{color:textColor}}>
      <MainTitle title="About Us" />
    </div>
  );
}

export default About;
