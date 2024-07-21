import React from 'react'
import MainTitle from './MainTitle'

function Contact(props) {
    const textColor = props.Theme === 'dark' ? 'white' : 'black'; 

  return (
    <div style={{color:textColor}}>
        <MainTitle title={"Contact Details"}/>
    </div>
  )
}

export default Contact