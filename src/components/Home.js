import React from "react";
import MainTitle from "./MainTitle";

function Home(props) {
    const textColor = props.Theme === 'dark' ? 'white' : 'black'; 

  return (
    <div style={{color:textColor}}>
      <MainTitle title={"Home"} />
    </div>
  );
}

export default Home;
